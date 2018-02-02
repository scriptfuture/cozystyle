var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
	rename = require('gulp-rename');
  
gulp.task('minify', function () {
  gulp.src('src/cozystyle.js')
      .pipe(uglify())
	  .pipe(rename('cozystyle.min.js'))
      .pipe(gulp.dest('build'))
});