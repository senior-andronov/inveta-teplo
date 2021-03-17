const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const minifyCSS = require('gulp-minify-css');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

sass.compiler = require('node-sass');

const path = require('../path');

function cssDev() {
	return gulp.src(path.input + 'sass/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(postcss([autoprefixer()]))
		.pipe(sourcemaps.write())
		.pipe(minifyCSS())
		.pipe(gulp.dest(path.output + 'css'))
		.pipe(browserSync.stream());
}

function cssBuild() {
	return gulp.src(path.input + 'sass/style.scss')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(postcss([autoprefixer()]))
		.pipe(minifyCSS())
		.pipe(gulp.dest(path.output + 'css'));
}

exports.cssDev = cssDev;
exports.cssBuild = cssBuild;