import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

export default [
  ...bpmnIoPlugin.configs.browser,
  ...bpmnIoPlugin.configs.jsx,
  {
    languageOptions: {
      globals: {
        'Blub': 'readonly'
      }
    }
  },
  {
    rules: {
      'react/jsx-tag-spacing': 'off',
      'react/jsx-equals-spacing': 'off',
      'react/jsx-curly-spacing': 'off'
    }
  }
];