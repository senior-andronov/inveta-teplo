const gulp = require('gulp');
const browserSync = require('browser-sync');

const path = require('../path');

function video() {
  return gulp.src(path.input + 'video/**/*.*')
    .pipe(gulp.dest(path.output + 'video'))
    .pipe(browserSync.stream({once: true}));
}

exports.video = video;