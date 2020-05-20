var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

var styleSRC= './src/scss/style.scss';
var styleDIST= './dist/css/';

var jsSRC= 'script.js';
var jsFolder= './src/js/';
var jsDIST = './dist/js/';

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

//many folders if you have
var jsFiles = [jsSRC];

gulp.task('js', function(done){
    // gulp.src(jsSRC)
    //     .pipe(gulp.dest(jsDIST))
    //     done();
    //browserify
    //transform babelify
    //bundle all together
    //score 
    //rename . min
    //buffer
    //init sourcemap
    //uglify
    //write sourcemap
    //dist

    jsFiles.map(function(entry){
        return browserify({
            entries:[jsFolder + entry]
        })
        .transform(babelify, {'presets':['@babel/preset-env']})
        .bundle()
        .pipe(source(entry))
        .pipe(rename({extname:'.min.js'}))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps:true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(jsDIST))
    })

    done();
})

var imgSRC = './src/images/*'
var imgDIST = './dist/images/'

gulp.task('images', function(done){
    gulp.src(imgSRC)
        .pipe(imagemin())
        .pipe(gulp.dest(imgDIST))
        done();
})

gulp.task('watch', function(){
    gulp.watch(styleWatch, gulp.series('js')),
    gulp.watch(jsWatch, gulp.series('js'))
})

gulp.task('default', gulp.parallel('styles','js'), function(){
    //do other things.
})