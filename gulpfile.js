var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('toCss',function(){
  return gulp.src('./scss/home1.scss')
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(gulp.dest('./css'));
})
gulp.task('watchs',function(){
    gulp.watch('./scss/*.scss',gulp.series('toCss'));
})