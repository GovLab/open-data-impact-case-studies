var
    gulp            = require('gulp'),
    imagemin        = require('gulp-imagemin'),
    imageResize     = require('gulp-image-resize'),
    cache           = require('gulp-cache')
    changed         = require('gulp-changed')
;


gulp.task('images', function(){
  return gulp.src('templates/static/img/banners/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(imagemin({
      interlaced: true
    }))
  .pipe(gulp.dest('templates/static/img/banners/min/'))
});

gulp.task('thumbs', function () {
  gulp.src('templates/static/img/banners/*.{png,jpg,jpeg}')
    .pipe(changed('templates/static/img/banners/thumbs/'))
    .pipe(imageResize({ width : 600 }))
    .pipe(gulp.dest('templates/static/img/banners/thumbs/'));
});

// gulp.task('default', ['images', 'thumbnails'], function (){ console.log ('running default task'); });