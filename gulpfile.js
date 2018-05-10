var gulp = require('gulp');
var markdown = require('gulp-markdown-it');

gulp.task('markdown', function() {
    return gulp.src('drafts/**/*.md')
        .pipe(markdown())
        .pipe(gulp.dest("docs"));
});

gulp.task('default', ['markdown'], function() {
    gulp.watch('drafts/**/*.md', ['markdown']);
});