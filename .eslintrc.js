function getMainConfig() {
  return {
    extends: [
      'airbnb',
    ],
    env: {
      browser: true,
    },
    rules: {
      'max-len': [
        2,
        {
          code: 150,
          tabWidth: 2,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
        },
      ],
      'global-require': [
        0,
      ],
      'no-underscore-dangle': [
        0,
      ],
      // This rule is very annoying to use in conjunction with generators since you can't yield in most functional loops but you can in for-of (which is restricted) so ForOf is enabled.
      'no-restricted-syntax': [
        0, 'ForOfStatement',
      ],
      'import/no-extraneous-dependencies': [
        'error', { devDependencies: true },
      ],
      'no-plusplus': ['error', {
        allowForLoopAfterthoughts: true,
      }],
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      }],
      /* This can give false positives when props are only used in nextProps or in container via ownProps. When you find invalid warnings, use the following to disable it

       // eslint-disable-next-line react/no-unused-prop-types
      */
      'react/no-unused-prop-types': [
        1,
      ],
    },
    settings: {
      'import/resolver': 'webpack',
    },
    globals: {
      window: true,
      fetch: true,
      document: true,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  };
}

module.exports = getMainConfig();
