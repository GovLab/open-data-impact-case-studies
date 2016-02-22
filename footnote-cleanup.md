# footnote cleanup
Use the following regex commands in Vim or a plugin like Vintageous to clean up broken links in the footnote section.  Select the text in the footnote section, hit `:`, and paste in the following commands:
```
# fix the links that are chopped in half by a tag

s:</span></a>([^<]*)</p>:\1</span></a></p>:g

# or, if there is a span around the content

s:</span></a><span class="e-link">([^<]*)</span></p>:\1</span></a></p>:g

# make the href match the url in the text

s:<a href="[^<]*"><span class="e-link">(http[s]?.//[^<]*)</span></a></p>:<a href="\1"><span class="e-link">\1</span></a></p>:g

```

For fixing `.` included in `href` problem:
```

# just .

s:(http[s]?.//[^<]*)\.</span></a></p>:\1</span></a>.</p>:g

s:(http[s]?.//[^<]*)\.("><span class="e-link">):\1\2:g

# . and space

s:(http[s]?.//[^<]*)\. </span></a></p>:\1</span></a>.</p>:g

s:(http[s]?.//[^<]*)\. ("><span class="e-link">):\1\2:g

```

- note, these could possibly be cleaned up. second set may not be necessary if problems from 1st set are resolved with a smarter regex

To create links
```
s:(https?.//[^\s<]*):<a href="\1"><span class="e-link">\1</span></a>:g

# isolate to just ones that are inside a bare p

s:(https?.//[^\s<]*)\s*</p>:<a href="\1"><span class="e-link">\1</span></a></p>:g
```

Add link onto a naked span
```
s:<span class="e-link">(https?.//[^\s<]*)</span>\s*</p>:<a href="\1"><span class="e-link">\1</span></a></p>:g
```

from scratch
```
s:\n+\s*(.+):\n\n<div id="footnote-xxx" class="_idFootnote"><p class="e-footnote-text"><a class="_idFootnoteAnchor _idGenColorInherit" href="case-studies-2_New_Zealand_Christchurch_Earthquakes.html#footnote-xxx-backlink">x</a>\1</p></div>:g

s:\n+\s*(.+):\n\n\1</div>:g

s:<div id="footnote-xxx" class="_idFootnote"><p class="e-footnote-text"><a class="_idFootnoteAnchor _idGenColorInherit" href="case-studies-2_New_Zealand_Christchurch_Earthquakes.html#footnote-xxx-backlink">x</a>([0-9][0-9]?):<div id="footnote-\1" class="_idFootnote"><p class="e-footnote-text"><a class="_idFootnoteAnchor _idGenColorInherit" href="case-studies-2_New_Zealand_Christchurch_Earthquakes.html#footnote-\1-backlink">\1</a>:g
```