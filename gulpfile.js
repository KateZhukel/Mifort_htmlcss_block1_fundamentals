const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sourceMaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('app/scss/main.scss')
        .pipe(plumber())
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function(){
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {
    browserSync.init({
        server: "dist"
    });
    const buildImg = gulp.src('app/images/*.png')
        .pipe(gulp.dest('dist/images'));

    const buildAweCss = gulp.src('app/fontawesome/css/**/*.css')
        .pipe(gulp.dest('dist/fontawesome/css'));

    const buildAweFonts = gulp.src('app/fontawesome/fonts/*.*')
        .pipe(gulp.dest('dist/fontawesome/fonts'));
    const buildNormalize = gulp.src('app/normalize.css/*.*')
        .pipe(gulp.dest('dist/normalize.css'));

    gulp.watch("app/scss/**/*.scss", gulp.parallel("sass"));
    gulp.watch("*.html", gulp.parallel("html"));
});
gulp.task('build', gulp.parallel('sass', 'html', 'serve'), function () {

});