const config = {
  extends: 'stylelint-config-standard',
  rules: {
    // There is a bug in stylefmt where it ignores this rule and always formats it a certain way, which always breaks lint. This needs disabled until that bug is fixed. https://github.com/morishitter/stylefmt/issues/256
    'declaration-empty-line-before': null,
  },
};

module.exports = config;
