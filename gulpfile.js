const bom = require('gulp-bom');
const fs = require('fs');
const gulp = require('gulp');
const replace = require('gulp-replace');
const size = require('gulp-size');

gulp.task('default', ['compile'], function () {
    gulp.watch('src/*', ['compile']);
});

gulp.task('compile', function () {
  const js = fs.readFileSync('src/tetris.js', 'utf8');
  const jsCompiled = js.trim().replace(/(?:\/\/[^\n]*)?\s*\n\s*/g, '');
  return gulp.src('src/tetris.html')
    .pipe(replace(/\s*\n\s*/g, ''))
    .pipe(replace(/<demo>/, jsCompiled))
    .pipe(bom())
    .pipe(size({pretty: false, showFiles: true}))
    .pipe(gulp.dest('dist'));
});
