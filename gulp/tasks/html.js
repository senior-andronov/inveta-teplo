const gulp = require('gulp');
const browserSync = require('browser-sync');
const pug = require('gulp-pug');
const rename = require('gulp-rename');

const path = require('../path');

function html() {
  return gulp.src(path.input + 'pages/**/*.pug')
    .pipe(pug({
      doctype : 'html',
      pretty: true
    }))
    .pipe(rename({dirname: ""}))
    .pipe(gulp.dest(path.output))
    .pipe(browserSync.stream());
}

exports.html = html;
