var jshint = require('gulp-jshint');
var gulp   = require('gulp');
 
gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('fail'));
});