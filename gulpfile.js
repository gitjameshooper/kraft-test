var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    neat = require('node-neat').includePaths;
 

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest('css'));
});



// Watch Files For Changes
gulp.task('watch', function() {

    gulp.watch('scss/*.scss', ['sass']);
});

// start webserver
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
// Default Task
gulp.task('default', ['sass', 'watch', 'webserver']);