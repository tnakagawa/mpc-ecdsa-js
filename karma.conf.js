const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
  config.set({
    basePath: '.',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'src/**/*.ts' },
    ],

    preprocesors: {
      'src/**/*.ts': ['webpack'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only',
    },
    browsers: ['ChromeHeadless'],
    singleRun: true,
  });
};
