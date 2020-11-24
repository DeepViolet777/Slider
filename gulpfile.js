const gulp = require('gulp')
//const watch = require('gulp-watch');
//const browserSync = require('browser-sync').create();
const serve = require('./gulp/tasks/serve')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const index = require('./gulp/tasks/index')
const img = require('./gulp/tasks/img')
//const clean = require('./gulp/tasks/clean')
const copyDependencies = require('./gulp/tasks/copyDependencies')

function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}

/*gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
});*/

//gulp.task('stream', function () {
 // return watch('css/**/*.css', { ignoreInitial: false })
     // .pipe(gulp.dest('build'));
//});

const dev = gulp.parallel(styles, script, fonts, img, index)

const build = gulp.series(copyDependencies, dev)



module.exports.start = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build)


