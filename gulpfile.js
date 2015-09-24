'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('./src/**/*.sass')
     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
     .pipe(gulp.dest('./dist'));
});
				        
gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.sass', ['sass']);
});

gulp.task('default', ['sass']);
