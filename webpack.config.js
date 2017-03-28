const args = require('minimist')(process.argv.slice(2));
const path = require('path');

const getWebpackConfig = require('./webpack');

const projectRoot = process.cwd();
const sourcePath = path.resolve(projectRoot, 'src');

const webpackConfig = getWebpackConfig({
  env: args.env,
  port: args.port,
  projectRoot,
  sourcePath,
});

module.exports = webpackConfig;
