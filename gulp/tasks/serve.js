const gulp = require('gulp')
const img = require('./img')
const styles = require('./styles')
const script = require('./script')
const copyDependencies = require('./copyDependencies')
const index = require('./index')

const server = require('browser-sync').create()

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('src/img/*.{gif,png,jpg,svg,webp}', gulp.series(img, readyReload))
    gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/js/**/*.js', gulp.series(script, readyReload))
    gulp.watch ('src/index.html', gulp.series(index, readyReload))
    gulp.watch('package.json', gulp.series(copyDependencies, readyReload))

    return cb()
}
