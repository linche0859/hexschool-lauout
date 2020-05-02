let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  conyFile: {
    src: [
      './app/**/*',
      '!./app/style',
      '!./app/layouts/**',
      '!./app/scss/**',
      '!./app/views/**',
      '!./app/**/*.scss',
      '!./app/**/*.html',
      '!./app/**/*.ejs',
    ],
    path: './dist/',
  },
  html: {
    src: ['!./app/**/*.ejs', './app/views/**/*.html', './app/**/*.html'],
    path: './dist/',
  },
  style: {
    src: ['./app/scss/**/*.scss'],
    path: './dist/style',
  },
  clean: {
    src: './dist',
  },
  browserDir: './dist',
  deploySrc: './dist/**/*',
};

exports.envOptions = envOptions;
