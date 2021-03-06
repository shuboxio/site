const config = require('../../config')
const gulp = require('gulp')
const path = require('path')
const del = require('del')

gulp.task('watch', () => {
  gulp.watch(path.join(config.shuboxWeb.images.src, '**'),  ['images'])
  gulp.watch(path.join(config.shuboxWeb.scripts.src, '**'), ['js'])
  gulp.watch(path.join(config.shuboxWeb.styles.src, '**'),  ['sass'])
  gulp.watch(path.join(config.shuboxWeb.jekyll.src, '**'),  ['jekyll-build'])
  gulp.watch(path.join(config.shuboxWeb.jekyll.tmp, '**'),  ['jekyll-sync'])
})

gulp.task('default', gulp.series(['browserSync', 'watch']))

gulp.task('clean', function () {
  return del(['public/*'])
})

gulp.task(
  'build',
  gulp.series([
    'clean',
    'images',
    'svg',
    'js',
    'sass',
    'jekyll-build',
    'jekyll-sync',
  ]),
)
