module.exports = {
  root: true,
  extends: ['custom'],
  rules: {
    // 'import/extensions': ['error', 'ignorePackages', {
    //   'ts': 'never',
    //   'tsx': 'never',
    //   'js': 'never',
    //   'jsx': 'never',
    //   'mjs': 'never'
    // }]
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