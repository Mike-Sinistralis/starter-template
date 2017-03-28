const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

function getCommonConfig(options) {
  const isProd = options.env === 'production';

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: options.env,
    }),
    new HtmlWebpackPlugin({
      title: 'Test App',
      template: path.resolve(options.sourcePath, 'index.html'),
      inject: false,
    }),
  ];
  
  return {
    entry: {
      vendor: ['react', 'react-dom', 'lodash'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(options.projectRoot, 'dist'),
    },
    devtool: isProd ? 'source-map' : 'eval',
    context: options.projectRoot,
    plugins,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [
        path.resolve(options.projectRoot, 'node_modules'),
        options.sourcePath,
      ],
    },
    stats: {
      colors: {
        green: '\u001b[32m',
      },
    },
    performance: isProd && {
      maxAssetSize: 100,
      maxEntrypointSize: 300,
      hints: 'warning',
    },
    devServer: {
      contentBase: path.resolve(options.projectRoot, 'dist'),
      historyApiFallback: true,
      port: options.port,
      compress: isProd,
      hot: !isProd,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        },
      },
    },
  }
}
  
module.exports = getCommonConfig;
