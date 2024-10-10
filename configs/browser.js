import globals from 'globals';

import recommended from './recommended.js';

export default [
  ...recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },
  {
    rules: {
      'no-restricted-imports': ['error', {
        'name': 'inherits',
        'message': 'Use inherits-browser instead'
      }]
    }
  }
];