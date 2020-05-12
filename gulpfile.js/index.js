const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: false });
const autoprefixer = require('autoprefixer');
const minimist = require('minimist');
const browserSync = require('browser-sync').create();
const { envOptions } = require('./envOptions');
const path = {
  bower: './bower_components/',
};

let options = minimist(process.argv.slice(2), envOptions);
//現在開發狀態
console.log(`Current mode：${options}`);

function copyFile() {
  return gulp
    .src(envOptions.conyFile.src)
    .pipe(gulp.dest(envOptions.conyFile.path));
}

function layoutHTML() {
  return gulp
    .src(envOptions.html.src)
    .pipe($.plumber())
    .pipe($.frontMatter())
    .pipe(
      $.layout((file) => {
        return file.frontMatter;
      })
    )
    .pipe(gulp.dest(envOptions.html.path))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}

function scss() {
  const plugins = [autoprefixer()];
  return gulp
    .src(envOptions.style.src)
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        outputStyle: 'expanded',
        includePaths: [path.bower + 'bootstrap-scss'],
      }).on('error', $.sass.logError)
    )
    .pipe($.postcss(plugins))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(envOptions.style.path))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}

/**
 * 處理 JS 集合
 */
function vendorJS() {
  return gulp
    .src([
      './node_modules/jquery/dist/jquery.slim.min.js',
      // './node_modules/popper.js/dist/popper.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    ])
    .pipe($.concat('vendor.js'))
    .pipe(gulp.dest(envOptions.js.path));
}

/**
 * popper.js 的 export 沒有包好
 * 分開封裝
 */
function popperJS() {
  return gulp
    .src(['./node_modules/popper.js/dist/popper.min.js'])
    .pipe($.concat('popper.js'))
    .pipe(gulp.dest(envOptions.js.path));
}

function browser() {
  browserSync.init({
    server: {
      baseDir: envOptions.browserDir,
    },
    port: 8080,
  });
}

function clean() {
  return gulp
    .src(envOptions.clean.src, { read: false, allowEmpty: true })
    .pipe($.clean());
}

function deploy() {
  return gulp.src(envOptions.deploySrc).pipe($.ghPages());
}

function watch() {
  gulp.watch(envOptions.html.src, gulp.series(layoutHTML));
  gulp.watch(envOptions.style.src, gulp.series(scss));
}

exports.deploy = deploy;

exports.build = gulp.series(
  clean,
  copyFile,
  layoutHTML,
  scss,
  vendorJS,
  popperJS,
  deploy
);

exports.default = gulp.series(
  clean,
  copyFile,
  layoutHTML,
  scss,
  vendorJS,
  popperJS,
  gulp.parallel(browser, watch)
);
