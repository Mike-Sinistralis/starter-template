const webpack = require('webpack');

function getDevelopmentConfig(options) {
  return {
    devtool: 'eval',
    entry: {
      js: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${options.port}`,
        'webpack/hot/only-dev-server',
        './src/index.jsx'
      ]},
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  };
}

module.exports = getDevelopmentConfig;
