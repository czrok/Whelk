var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('electron', function(){
  run('electron app/').exec();
});

gulp.task('default', ['electron']);
