"use strict";

import gulp from "gulp";

gulp.task("copy", () => {
    return gulp.src("./src/index.html")
        .pipe(gulp.dest("./dist"));
});
