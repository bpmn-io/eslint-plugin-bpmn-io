'use strict';

module.exports = {
  configs: {
    recommended: {
      env: {
        node: true
      },
      parserOptions: {
        ecmaVersion: 5
      },
      extends: [
        'eslint:recommended'
      ],
      rules: {
        'indent': [ 2, 2, {
          VariableDeclarator: { var: 2, let: 2, const: 3 },
          FunctionDeclaration: { body: 1, parameters: 2 },
          FunctionExpression: { body: 1, parameters: 2 }
        } ],
        'keyword-spacing': [ 2 ],
        'no-console': 0,
        'no-unused-vars': [ 2, { args: 'none' } ],
        'no-trailing-spaces': [ 2 ],
        'object-curly-spacing': [ 2, 'always' ],
        'semi': [ 2, 'always' ],
        'space-before-blocks': [ 2, 'always' ],
        'space-before-function-paren': [ 2, 'never' ],
        'quotes': [ 2, 'single' ]
      }
    },
    es6: {
      parserOptions: {
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: true
        },
        sourceType: 'module'
      },
      extends: [
        'eslint:bpmn-io/recommended'
      ]
    },
    mocha: {
      plugins: [
        'mocha'
      ],
      env: {
        mocha: true
      },
      rules: {
        'mocha/no-exclusive-tests': 2
      },
      globals: {
        expect: true
      }
    },
    jsx: {
      plugins: [
        'react'
      ],
      rules: {
        'react/jsx-uses-vars': 2
      }
    },
    es5: {
      parserOptions: {
        ecmaVersion: 5
      },
      extends: [
        'plugin:bpmn-io/recommended'
      ]
    },
  },
};
