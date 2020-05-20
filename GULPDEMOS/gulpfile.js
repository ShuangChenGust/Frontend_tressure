var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');


var styleSRC= './src/scss/style.scss';
var styleDIST= './dist/css/';

var jsSRC= './src/js/script.js';
var jsDIST = './dist/css/';

var styleWatch = './src/scss/**/*.scss';
var jsWatch = './src/js/**/*.js';

gulp.task('styles', function(done){
    console.log('first gulp task')
    gulp.src(styleSRC)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole:true,
            outputStyle:'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers:['last 2 versions'],
            cascade:false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(styleDIST))
        done();
});

gulp.task('js', function(done){
    gulp.src(jsSRC)
        .pipe(gulp.dest(jsDIST))
        done();
})

gulp.task('watch', function(){
    gulp.watch(styleWatch, gulp.series('js')),
    gulp.watch(jsWatch, gulp.series('js'))
})

gulp.task('default', gulp.parallel('styles','js'), function(){
    //do other things.
})