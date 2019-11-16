var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var mincss = require('gulp-minify-css');
var minhtml = require('gulp-minify-html');
var imagemin = require('gulp-imagemin');

gulp.task('toCss', function () {
    return gulp.src('./scss/home1.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
})

gulp.task('uglify', function () {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./demo/js'))
});
gulp.task('minCss', function () {
    return gulp.src('./css/*.css')
        .pipe(mincss())
        .pipe(gulp.dest('./demo/css'))
});
gulp.task('minHtml', function () {
    return gulp.src('./*.html')
        .pipe(minhtml())
        .pipe(gulp.dest('./demo'))
});
// gulp.task('imageMin', function () {
//     return gulp.src('./images/*.*') // 要压缩的图片
//         // .pipe(imagemin([// 压缩图片 >3 版本
//         //     // imagemin.gifsicle({interlaced: true}),
//         //     imagemin.jpegtran({progressive: true}),
//         //     // imagemin.optipng({optimizationLevel: 5}),
//         //     imagemin.svgo({
//         //         plugins: [
//         //             {removeViewBox: true},
//         //             {cleanupIDs: false}
//         //         ]
//         //     })
//         // ]))
//         .pipe(imagemin([
//             // imagemin.gifsicle({interlaced: true}),
//             imagemin.jpegtran({progressive: true}),
//             imagemin.optipng({optimizationLevel: 5}),
//             imagemin.svgo({
//                 plugins: [
//                     {removeViewBox: true},
//                     {cleanupIDs: false}
//                 ]
//             })
//         ]))
//         .pipe(gulp.dest('./demo/images'));//写入dist/img文件夹
// });

gulp.task('minis', gulp.parallel('uglify', 'minCss', 'minHtml'));

gulp.task('watchs', function () {
    gulp.watch('./scss/*.scss', gulp.series('toCss'));
})