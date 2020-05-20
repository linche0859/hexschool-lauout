const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: false });
const autoprefixer = require('autoprefixer');
const minimist = require('minimist');
const browserSync = require('browser-sync').create();
const { envOptions } = require('./envOptions');

let options = minimist(process.argv.slice(2), envOptions);
//現在開發狀態
console.log(`Current mode：${options.env}`);

function copyFile() {
  return gulp
    .src(envOptions.conyFile.src)
    .pipe(gulp.dest(envOptions.conyFile.path))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
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

function sass() {
  const plugins = [autoprefixer()];
  return gulp
    .src(envOptions.style.src)
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        outputStyle: envOptions.style.outputStyle,
        includePaths: envOptions.style.includePaths,
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
    .src(envOptions.vendors.src)
    .pipe($.concat(envOptions.vendors.concat))
    .pipe(gulp.dest(envOptions.vendors.path));
}

function babel() {
  return (
    gulp
      .src(envOptions.js.src)
      .pipe($.sourcemaps.init())
      .pipe(
        $.babel({
          presets: ['@babel/env'],
        })
      )
      // .pipe($.concat(envOptions.js.concat))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(envOptions.js.path))
      .pipe(
        browserSync.reload({
          stream: true,
        })
      )
  );
}

function browser() {
  browserSync.init({
    server: {
      baseDir: envOptions.browserSetting.dir,
    },
    port: envOptions.browserSetting.port,
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
  gulp.watch(envOptions.html.ejsSrc, gulp.series(layoutHTML));
  gulp.watch(envOptions.js.src, gulp.series(babel));
  gulp.watch(envOptions.img.src, gulp.series(copyFile));
  gulp.watch(envOptions.style.src, gulp.series(sass));
}

exports.deploy = deploy;

exports.build = gulp.series(
  clean,
  copyFile,
  layoutHTML,
  sass,
  babel,
  vendorJS,
  deploy
);

exports.default = gulp.series(
  clean,
  copyFile,
  layoutHTML,
  sass,
  babel,
  vendorJS,
  gulp.parallel(browser, watch)
);
