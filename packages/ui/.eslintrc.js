module.exports = {
  root: true,
  extends: ['plugin:react/recommended', 'custom',],
  rules: {
    // 'import/extensions': [
    //   'error',
    //   {
    //     'js': 'never',
    //     'jsx': 'never',
    //     'ts': 'never',
    //     'tsx': 'never'
    //   }
    // ],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true, // devDependenciesのimportを許可
      optionalDependencies: false,
    }],
    'no-use-before-define': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.ts',
          '.tsx'
        ]
      }
    }
  },
};
