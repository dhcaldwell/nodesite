var gulp = require('gulp');

var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('lint', function(){
  gulp.src(['./model/*.js', 
            './views/*.js', 
            './routes/*.js', 
            './test/*.js', 
            './lib/*.js',
            './app.js'])
    .pipe(jshint({node: true}))
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function(){
  gulp.src('./test/*.js')
    .pipe(mocha({}));
});

gulp.task('default', ['lint', 'test']);
