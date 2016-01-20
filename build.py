# -*- coding: utf-8 -*-

import re
from os import path, getcwd, listdir, remove, chdir
from sys import argv
import subprocess
from yaml import load
from shutil import rmtree
from slugify import slugify
from datetime import date, datetime
from unidecode import unidecode
import staticjinja
import argh
from watchdog.events import FileSystemEventHandler

from govlabstatic.cli import Manager

_TODAY = date.today()

# Define constants for the deployment.
_SASSPATH = path.join(getcwd(), 'sass')
_SEARCHPATH = path.join(getcwd(), 'templates')
_OUTPUTPATH = path.join(getcwd(), 'site')
_DATAPATH = path.join(getcwd(), 'data')

# Load the data we want to use in the templates.
_TEAM = path.join(_DATAPATH, 'team.yaml')
_FUNDERS = path.join(_DATAPATH, 'funders.yaml')
_CASE_STUDIES = path.join(_DATAPATH, 'case-studies.yaml')

_SLUG = lambda x: slugify(unicode(unidecode(unicode(x).lower())) if x else u'')


def filters():
    return {'slug': _SLUG}


def clean():
    '''
    Clean the output folder.
    '''

    if path.exists(_OUTPUTPATH):
        rmtree(_OUTPUTPATH)


def render_detail_pages(env, template, **kwargs):
    '''
    Generic staticjinja rule for generating detail pages.

    Use:    adding a file
            /templates/(name).custom will use
            /templates/_(name).html as a template to generate pages based on
            /data/(name).yaml

    Files:

    _SEARCHPATH/(name).custom:
    The placeholder file used to trigger this rule is treated as a yaml file, which must include a [context] element.
    For best results use an alphanumeric string with no spaces.
    Defaults to 'page' if not defined.
    Example file:

        # defines the context used in the template file
        # use: in the generator template file, variables should be prefixed as (context).(variable)
        context: 'somecontext'

    _DATAPATH/(name).yaml:
    The yaml data file's entries must have a [title] element - example :

        # must include in each entry:
        - title: 'sometitle'

    _SEARCHPATH/_(name).html:
    Within this template file, variables must be prefixed with the value of [context] - example:

        {{somecontext.somevariable}}

    Generated pages will have the following naming convention:

        /site/[context]-[title].html

    '''

    print('Found custom generator: ' + template.name)
    page_name = re.sub(r'.custom$', '', template.name, 1)
    page_template = env.get_template('_' + page_name + '.html')
    yaml_source = load(open(path.join(_DATAPATH, page_name + '.yaml')))
    custom_yaml = load(open(path.join(_SEARCHPATH, template.name)))
    if custom_yaml:
        if 'context' in custom_yaml:
            _context = custom_yaml['context']
        else:
            _context = 'page'
    else:
        _context = 'page'
    for index, yaml in enumerate(yaml_source):
        out = '%s-%s.html' % (_context, _SLUG(yaml['title']))
        page_template.stream({_context : yaml}, **kwargs).\
            dump(path.join(env.outpath, out))


class ReloadingContext(FileSystemEventHandler):
    '''
    Regenerates a template context, and the static site, whenever files
    in the data directory change.
    '''

    path = _DATAPATH

    def __init__(self):
        FileSystemEventHandler.__init__(self)
        self.cache_context()

    def get(self):
        return self._cached_context

    def add_to(self, manager):
        self.site = manager.site
        manager.watcher.observer.schedule(self, self.path)

    def on_any_event(self, event):
        self.cache_context()
        self.site.render_templates(self.site.templates)

    def cache_context(self):
        self._cached_context = self.build_context()

    def build_context(self):
        dic = {}

        dic['team'] = load(open(_TEAM))
        dic['funders'] = load(open(_FUNDERS))
        dic['cases'] = load(open(_CASE_STUDIES))

        return dic

def deploy():
    '''
    Deploy the site to production.
    '''

    subprocess.check_call(
        'git subtree push --prefix site origin gh-pages',
        shell=True
    )

if __name__ == '__main__':
    context = ReloadingContext()

    site = staticjinja.make_site(
        filters=filters(),
        outpath=_OUTPUTPATH,
        contexts=[
            (r'.*.html', context.get),
            (r'.*.custom', context.get),
        ],
        # rules=[
        #     (r'.*.custom', render_detail_pages)
        # ],
        searchpath=_SEARCHPATH,
        staticpaths=['static']
    )

    manager = Manager(
        sass_src_path=path.join(_SASSPATH, 'styles.scss'),
        sass_dest_path=path.join(_SEARCHPATH, 'static', 'styles',
                                 'styles.css'),
        site=site,
        site_name='odi-draft',
    )
    context.add_to(manager)
    argh.add_commands(manager.parser, [deploy, clean])

    manager.run()
