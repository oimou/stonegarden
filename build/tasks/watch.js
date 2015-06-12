"use strict";

import gulp from "gulp";
import watch from "gulp-watch";

gulp.task("watch", () => {
    watch("./src/jsx/*.jsx", () => gulp.start("react"));
    watch("./src/index.html", () => gulp.start("copy"));
    watch("./src/img/*", () => gulp.start("img"));
});
