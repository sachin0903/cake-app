var gulp = require('gulp'),
  connect = require('gulp-connect'),
  karma = require('karma');

var paths = {
  app: './',
  src: ['./js/components/cake.html',
         './js/components/cake.controller.js',
         './js/services/cake-data/cake-data.service.js',
         './js/services/api-data/api-data.service.js',
         './css/*.css',
         './js/*.js']
};

gulp.task('connect', function() {
  connect.server({
    root: paths.app,
    livereload: true,
    port: 2772
  });
});

gulp.task('html', function() {
  gulp.src(paths.src)
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch([paths.src], ['html']);
});

gulp.task('test', function (done) {
    var karmaServer = new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function (exitCode) {
        done();
        process.exit(exitCode);
    }).start();
}); 

gulp.task('default', ['connect', 'watch']);
