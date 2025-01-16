import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022
    }
  },
  {
    rules: {
      'array-bracket-spacing': ['error', 'always'],
      'indent': ['error', 2, {
        VariableDeclarator: { var: 2, let: 2, const: 3 },
        FunctionDeclaration: { body: 1, parameters: 2 },
        FunctionExpression: { body: 1, parameters: 2 }
      }],
      'keyword-spacing': ['error'],
      'lines-around-comment': ['error', {
        beforeBlockComment: true,
        beforeLineComment: true
      }],
      'no-bitwise': 'error',
      'no-console': 'off',
      'no-constant-condition': ['error', {
        checkLoops: true
      }],
      'no-multi-spaces': 'error',
      'no-trailing-spaces': ['error'],
      'no-unused-vars': ['error', {
        args: 'none',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        caughtErrors: 'none'
      }],
      'object-curly-spacing': ['error', 'always'],
      'semi': ['error', 'always'],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': ['error', {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
      }],
      'spaced-comment': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'quotes': ['error', 'single', { avoidEscape: true }]
    }
  }
];