module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      babelrc: false
    }
  },
  extends: [
    'plugin:bpmn-io/recommended'
  ]
};