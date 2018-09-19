var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        injectChanges: true,
        notify: false,
        server: {
            baseDir: './'
        }
    })
})

gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream({match: '**/*.css'}));
})

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('./scripts/**/*.js', browserSync.reload);
})

gulp.task('default', ['watch'])

var build = require('gulp-build');
 
gulp.task('build', function() {
  gulp.src('scripts/*.js')
      .pipe(build({ GA_ID: '123456' }))
      .pipe(gulp.dest('dist'))
});