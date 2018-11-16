var gulp = require('gulp'),
    htmlmim = require('gulp-htmlmin'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');

var htmlSource = 'source/*.html',
    sassSource = 'source/sass/**/*.sass',
    jsSource = 'source/js/*.js',
    imgSource = 'source/img/*',
    faviconSource = 'source/favicon/*';
    
var htmlDestination = 'build/',
    cssDestination = 'build/assets/css/',
    jsDestination = 'build/assets/js/',
    imgDestination = 'build/assets/img/',
    faviconDestination = 'build/';


// HTML Task
gulp.task('html', function() {
    gulp.src(htmlSource)
        .pipe(plumber())
        .pipe(htmlmim({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(htmlDestination))
});

// SASS Task
gulp.task('sass', function() {
    return gulp.src(sassSource)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer())
        .pipe(plumber())
        .pipe(concat('style.css'))
        .pipe(gulp.dest(cssDestination))
});

// JS Task
gulp.task('js', function(cb) {
    pump([
        gulp.src(jsSource),
        plumber(),
        uglify(),
        gulp.dest(jsDestination)
    ],
    cb
    );
});

// Image Task
gulp.task('image-minify', () => {
    gulp.src(imgSource)
        .pipe(imagemin())
        .pipe(plumber())
        .pipe(gulp.dest(imgDestination))
});

//Favicon Task
gulp.task('favicon', () => {
    gulp.src(faviconSource)
        .pipe(imagemin())
        .pipe(plumber())
        .pipe(gulp.dest(faviconDestination))
});

// Watch Task
gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: './build'
        },
        notify: false
    });

    gulp.watch(htmlSource, ['html']);
    gulp.watch(jsSource, ['js']);
    gulp.watch(imgSource, ['image-minify']);
    gulp.watch(faviconSource, ['favicon']);
    gulp.watch([
        'build/*.html',
        'build/assets/img/*',
        'build/assets/css/*.css',
        'build/assets/js/*.js'
    ]).on('change', browserSync.reload);
});

// Default Task
gulp.task('default', [ 'html', 'js', 'image-minify', 'favicon', 'watch' ]);