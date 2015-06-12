"use strict";

import gulp from "gulp";
import babelify from "babelify";
import browserify from "browserify";
import debowerify from "debowerify";
import source from "vinyl-source-stream";

gulp.task("react", () => {
    browserify({
        entries: "./src/jsx/index.jsx",
        debug: true
    })
        .transform(babelify)
        .transform(debowerify)
        .bundle()
        .on("error", (err) => console.log(`Error: ${err.message}`))
        .pipe(source("index.js"))
        .pipe(gulp.dest("./dist/js"));
});
