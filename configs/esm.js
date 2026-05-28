import importPlugin from 'eslint-plugin-import-x';

export default [
  importPlugin.flatConfigs.recommended,
  {
    rules: {
      'import-x/extensions': ['error', 'ignorePackages', { fix: true } ],
      'import-x/no-commonjs': 'error'
    }
  }
];