var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var less = require('gulp-less');
var runSequence = require('gulp-run-sequence');
var gutil = require('gulp-util');
var typescript = require('gulp-tsc');

gulp.task('less',function(){
    return gulp.src('./less/*.less')
    .pipe(less().on('error', function(err){
        gutil.log(err);
        this.emit('end');
    })).pipe(gulp.dest('./css'));
});
gulp.task('ts',function(){
    return gulp.src(['app/*.ts','app/**/*.ts'])
    .pipe(typescript().on('error', function(err){
        gutil.log(err);
        this.emit('end');
    })).pipe(gulp.dest('./dist'));
})
gulp.task('less-watch',['less'],browserSync.reload);
gulp.task('ts-watch',['ts'],browserSync.reload);
gulp.task('watch',function(){
    browserSync({
        server:{
            baseDir:'.'
        }        
    })
    // gulp.watch('Webcontent/less/*.less',['less-watch']);
    gulp.watch(['app/*.ts','app/**/*.ts'],['ts-watch']);
});

gulp.task('default',function(){
    runSequence('less','watch');
})
