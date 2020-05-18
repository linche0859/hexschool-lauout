const srcPath = './app';
const distPath = './dist';
const nodePath = './node_modules';

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
    path: `${distPath}/style`,
  },
  js: {
    src: [`${srcPath}/js/**/*.js`],
    concat: 'all.js',
    path: `${distPath}/js`,
  },
  vendors: {
    src: [
      `${nodePath}/jquery/dist/**/jquery.min.js`,
      `${nodePath}/bootstrap/dist/js/bootstrap.bundle.min.js`,
    ],
    concat: 'vendors.js',
    path: `${distPath}/js`,
  },
  popper: {
    src: [`${nodePath}/popper.js/dist/popper.min.js`],
    concat: 'popper.js',
    path: `${distPath}/js`,
  },
  img: {
    src: [`${srcPath}/assets/images/**/*`],
  },
  clean: {
    src: distPath,
  },
  browserDir: distPath,
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
