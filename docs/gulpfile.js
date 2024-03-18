var gulp = require('gulp'),
    inline = require('gulp-inline');

gulp.task('default', function() {
    return gulp.src('./*.html')
        .pipe(inline())
        .pipe(gulp.dest('build/'));
});
