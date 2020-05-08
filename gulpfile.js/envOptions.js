const srcPath = './app';
const distPath = './dist';

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
      `!${srcPath}/views/**`,
      `!${srcPath}/**/*.scss`,
      `!${srcPath}/**/*.html`,
      `!${srcPath}/**/*.ejs`,
    ],
    path: distPath,
  },
  html: {
    src: [`${srcPath}/views/**/*.html`, `${srcPath}/**/*.html`],
    ejsSrc: [`${srcPath}/**/*.ejs`],
    path: distPath,
  },
  style: {
    src: [`${srcPath}/scss/**/*.scss`],
    path: `${distPath}/style`,
  },
  clean: {
    src: distPath,
  },
  browserDir: distPath,
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
