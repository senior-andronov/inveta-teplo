const gulp = require('gulp');
const browserSync = require('browser-sync');

const path = require('../path');

function json() {
  return gulp.src(path.input + 'json/**/*.*')
    .pipe(gulp.dest(path.output + 'json'))
    .pipe(browserSync.stream({once: true}));
}

exports.json = json;
