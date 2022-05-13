const { task, watch, src, dest, parallel, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync");

function reloadHard() {
  browserSync.reload();
}

function reloadStream() {
  browserSync.reload({
    stream: true,
  });
}

function browserSyncInit() {
  const files = ["**/*.html", "**/*.{js,png,jpg,jpeg,svg,gif}"];
  browserSync.init(files, {
    // DOC: http://www.browsersync.io/docs/options/
    proxy: "http://localhost:3000",
    // Turn off browserSync notifications
    notify: false,
    // Open the site in browser
    open: "external",
    // Inject CSS changes
    injectChanges: true,
    snippetOptions: {
      ignorePaths: "wp-admin/**",
    },
  });
}

function filesWatch() {
  watch("**/*.css", series("reloadStream"));
  watch("**/*.html", series("reloadStream"));

  // stop old version of gulp watch from running when you modify the gulpfile
  watch("gulpfile.js").on("change", () => process.exit(0));
}

function sassBuild() {
  return src("./assets/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./assets/css"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}

function sassWatch() {
  return watch("./assets/scss/**/*.scss", sassBuild);
}

// browserSync related tasks
task("reloadHard", reloadHard);
task("reloadStream", reloadStream);
task("browserSyncInit", browserSyncInit);
task("filesWatch", filesWatch);

// Gulp Task to build sass + js files, for production
task("sassBuild", sassBuild);
task("sassWatch", sassWatch);

// Gulp Task to build production files
task("build", parallel("sassBuild"));

// Gulp Task to watch changes on sass + js files, for development
task("watch", parallel("sassWatch", "filesWatch", "browserSyncInit"));
