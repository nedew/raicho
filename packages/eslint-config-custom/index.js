module.exports = {
  extends: ['airbnb', 'next', 'turbo', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    // "react/jsx-key": "off",
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
