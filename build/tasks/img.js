"use strict";

import gulp from "gulp";

gulp.task("img", () => {
    return gulp.src("./src/img/*")
        .pipe(gulp.dest("./dist/img"));
});
