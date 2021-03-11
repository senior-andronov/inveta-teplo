const gulp = require('gulp');

const { html } = require('./html');
const { cssDev } = require('./css');
const { jsDev } = require('./js');
const { imgDev, svg } = require('./img');
const { fonts } = require('./fonts');
const { video } = require('./video');
const { json } = require('./json');

const path = require('../path');

function watch() {
  gulp.watch([
    path.input + 'pug/**/*.pug',
    path.input + 'pages/**/*.pug',
    path.input + 'blocks/**/*.pug'
  ], gulp.series(html));

  gulp.watch([
    path.input + 'sass/**/*.scss',
    path.input + 'pages/**/*.scss',
    path.input + 'blocks/**/*.scss'
  ], gulp.series(cssDev));

  gulp.watch(path.input + 'js/**/*.js', gulp.series(jsDev));

  gulp.watch(path.input + 'img/**/*.*', gulp.parallel(imgDev, svg));

  gulp.watch(path.input + 'fonts/**/*.*', gulp.series(fonts));
  gulp.watch(path.input + 'video/**/*.*', gulp.series(video));
  gulp.watch(path.input + 'json/**/*.*', gulp.series(json));
}

exports.watch = watch;
