'use strict';

const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc3');

gulp.task('doc', function(cb) {
    var config = require('./jsdoc.json');
    gulp.src(['README.md', './src/**/*.js'], {read: false}).pipe(jsdoc(config, cb));
});

