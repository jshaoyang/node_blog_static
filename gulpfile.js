'use strict';
var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('post',function () {
	exec('npm run build',function () {
		require('./post');
	});
});