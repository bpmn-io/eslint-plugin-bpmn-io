import importPlugin from 'eslint-plugin-import-x';

export default [
  importPlugin.flatConfigs.recommended,
  {
    settings: {
      'import-x/resolver-next': [
        importPlugin.createNodeResolver({
          conditionNames: [ 'import', 'default' ],
          extensions: [ '.js' ],
          symlinks: false
        })
      ]
    },
    rules: {
      'import-x/extensions': [ 'error', 'ignorePackages', {
        fix: true,
        ignorePackages: true,
        pathGroupOverrides: [
          { pattern: '*/**', action: 'ignore' }
        ]
      } ],
      'import-x/no-commonjs': 'error'
    }
  }
];