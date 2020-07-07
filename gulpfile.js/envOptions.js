const srcPath = './app';
const distPath = './dist';
const nodePath = './node_modules';
const bowerPath = './bower_components';

let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  conyFile: {
    src: [
      `${srcPath}/**/*`,
      `!${srcPath}/style`,
      `!${srcPath}/layouts/**`,
      `!${srcPath}/scss/**`,
      `!${srcPath}/sass/**`,
      `!${srcPath}/views/**`,
      `!${srcPath}/js/**`,
      `!${srcPath}/**/*.scss`,
      `!${srcPath}/**/*.sass`,
      `!${srcPath}/**/*.html`,
      `!${srcPath}/**/*.ejs`,
      `!${srcPath}/**/*.js`,
    ],
    path: distPath,
  },
  html: {
    src: [`${srcPath}/views/**/*.html`, `${srcPath}/**/*.html`],
    ejsSrc: [`${srcPath}/**/*.ejs`],
    path: distPath,
  },
  style: {
    src: [`${srcPath}/scss/**/*.scss`, `${srcPath}/sass/**/*.sass`],
    outputStyle: 'expanded',
    includePaths: [`${bowerPath}/bootstrap-scss`, `${nodePath}/aos/dist`],
    path: `${distPath}/style`,
  },
  js: {
    src: [`${srcPath}/js/**/*.js`],
    concat: 'all.js',
    path: `${distPath}/js`,
  },
  vendors: {
    src: [
      `${nodePath}/jquery/dist/**/jquery.slim.min.js`,
      `${nodePath}/bootstrap/dist/js/**/bootstrap.bundle.min.js`, // 已包含 popper.js
      `${nodePath}/aos/dist/aos.js`,
    ],
    concat: 'vendors.js',
    path: `${distPath}/js`,
  },
  img: {
    src: [`${srcPath}/assets/images/**/*`],
  },
  clean: {
    src: distPath,
  },
  browserSetting: {
    dir: distPath,
    port: 8082,
  },
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
