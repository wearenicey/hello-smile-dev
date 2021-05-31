var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvariables = require('postcss-css-variables');
var calc = require('postcss-calc');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');

// js file paths
var utilJsPath = 'js';
var componentsJsPath = 'js/components/*.js'; // component js files
var scriptsJsPath = 'assets'; //folder for final scripts.js/scripts.min.js files

// css file paths
var cssFolder = 'assets'; // folder for final style.css/style-custom-prop-fallbac.css files
var scssFilesPath = 'scss/**/*.scss'; // scss files to watch


gulp.task('sass', function () {
  return gulp.src(scssFilesPath)
      .pipe(sassGlob())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(postcss([autoprefixer()]))
      .pipe(rename('style.css.liquid'))
      .pipe(replace('"{{', '{{'))
      .pipe(replace('}}"', '}}'))
      .pipe(gulp.dest(cssFolder))
});

// This task is used to convert the scss to css and compress it. A fallback for IE (style-fallback.css) is created
gulp.task('sass-ie', function () {
  return gulp.src(scssFilesPath)
      .pipe(sassGlob())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(postcss([autoprefixer()]))
      .pipe(gulp.dest(cssFolder))
      // .pipe(browserSync.reload({
      //   stream: true
      // }))
      .pipe(rename('style-fallback.css'))
      .pipe(postcss([cssvariables(), calc()]))
      .pipe(gulp.dest(cssFolder));
});


gulp.task('scripts', function () {
  return gulp.src([utilJsPath + '/util.js', componentsJsPath])
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest(scriptsJsPath))
      // .pipe(browserSync.reload({
      //   stream: true
      // }))
      .pipe(rename('scripts.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(scriptsJsPath))
  // .pipe(browserSync.reload({
  //   stream: true
  // }));
});

gulp.task('watch', gulp.series(['sass', 'scripts'], function () {
  gulp.watch(scssFilesPath, gulp.series(['sass']));
  gulp.watch(componentsJsPath, gulp.series(['scripts']));
}));

/* Gulp watch-ie task */
gulp.task('watch-ie', gulp.series(['sass-ie', 'scripts'], function () {
  gulp.watch(scssFilesPath, gulp.series(['sass-ie']));
  gulp.watch(componentsJsPath, gulp.series(['scripts']));
}));


