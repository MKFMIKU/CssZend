var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

var reload      = browserSync.reload;

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    gulp.watch("./public/css/*.css").on("change", reload);
});