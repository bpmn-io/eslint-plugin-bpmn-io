import reactPlugin from 'eslint-plugin-react';

export default [
  reactPlugin.configs.flat.recommended,
  {
    rules: {
      'jsx-quotes': ['error', 'prefer-double'],
      'react/jsx-curly-spacing': ['error', { when: 'always' }],
      'react/jsx-equals-spacing': 'error',
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-no-undef': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-pascal-case': 'error',
      'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }],
      'react/jsx-uses-vars': 'error',
      'react/prop-types': [ 'error', { skipUndeclared: true } ]
    }
  }
];