import mochaPlugin from 'eslint-plugin-mocha';

export default [
  mochaPlugin.configs.flat.recommended,
  {
    rules: {
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-pending-tests': 'off',
      'mocha/no-skipped-tests': 'off',
      'mocha/no-setup-in-describe': 'off',
      'mocha/no-sibling-hooks': 'off',
      'mocha/max-top-level-suites': 'off',
    },
    languageOptions: {
      globals: {
        expect: false
      }
    }
  }
];