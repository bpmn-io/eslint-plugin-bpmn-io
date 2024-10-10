import globals from 'globals';

import recommended from './recommended.js';

export default [
  ...recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }
];