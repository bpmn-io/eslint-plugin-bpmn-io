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
  }
];