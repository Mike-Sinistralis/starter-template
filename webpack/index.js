const { isArray, mergeWith } = require('lodash');

const getCommonConfig = require('./webpack.common.js');
const getProdConfig = require('./webpack.production.js');
const getDevelopmentConfig = require('./webpack.development.js');

function mergeConfigs(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }

  // Lodash expects this if custom action isn't needed.
  return undefined;
}

function getConfig(options) {
  let config;

  if (options.env === 'development') {
    config = mergeWith(getCommonConfig(options), getDevelopmentConfig(options), mergeConfigs);
  } else {
    config = mergeWith(getCommonConfig(options), getProdConfig(options), mergeConfigs);
  }

  return config;
}

module.exports = getConfig;