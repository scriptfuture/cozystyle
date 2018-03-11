var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('minify', function() {
    gulp.src('src/cozystyle.js')
        .pipe(uglify())
        .pipe(rename({
            basename: 'cozystyle',
            suffix: '.min'
        }))
        .pipe(gulp.dest('build'))
});