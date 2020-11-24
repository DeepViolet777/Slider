const gulp = require('gulp')

module.exports = function index() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('build/'))
}
