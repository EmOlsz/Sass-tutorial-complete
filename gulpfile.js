// Commons
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

// Sass
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// JS
const concat = require('gulp-concat');

// Images
const imagemin = require('gulp-imagemin');

gulp.task('default', ['sass', 'javascript', 'imagemin']);

gulp.task('sass', () => {
    return gulp.src('./app/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', () => {
    gulp.watch('./app/sass/*/*.scss', ['sass']);
});

gulp.task('javascript', () => {
    gulp.src('./app/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('custom.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('imagemin', () => {
    var imgSrc = 'src/images/*.+(png|jpg|gif)',
        imgDst = 'build/images';

    gulp.src('./app/images/*.+(png|jpg)')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('default',['imagemin'],function(){
});