'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload   = require('gulp-livereload'),
    watch = require('gulp-watch'),
    sourcemaps   = require('gulp-sourcemaps');

function styles() {
  return gulp.src('sass/**/*.sass')
      .pipe(watch('sass/**/*.sass'))
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'expanded',}).on('error', sass.logError))
      .pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('css'))
      .pipe(livereload({ start: true }));
}

gulp.task('styles', styles);
