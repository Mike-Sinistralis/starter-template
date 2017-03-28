const webpack = require('webpack');
const path = require('path');

function getProductionConfig() {
  return {
    entry: {
      js: './src/index.jsx'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          sequences: true,
          dead_code: true,
          conditionals: true,
          booleans: true,
          unused: true,
          if_return: true,
          join_vars: true,
          drop_console: false,
        },
      }),
    ],
  };
}

module.exports = getProductionConfig;
