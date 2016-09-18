const gulp = require('gulp')
const del = require('del')
const webpackBuild = require('ionic-gulp-webpack')


/**
 * Ionic hooks
 * Add ':before' or ':after' to any Ionic project command name to run the specified
 * tasks before or after the command.
 */
gulp.task('serve:before', ['watch'])
gulp.task('emulate:before', ['build'])
gulp.task('deploy:before', ['build'])
gulp.task('build:before', ['build'])
gulp.task('run:before', ['build'])


gulp.task('build', ['clean'], webpackBuild)

gulp.task('watch', ['clean'], function(){
  return webpackBuild({
    watch: true,
    statsOptions: {
      'colors': true,
      'errorDetails': true
    }
  })
})

gulp.task('clean', function(){
  return del('www/build')
});
