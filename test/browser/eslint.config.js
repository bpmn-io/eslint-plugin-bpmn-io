import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

export default [
  ...bpmnIoPlugin.configs.browser,
  {
    languageOptions: {
      globals: {
        'Blub': 'readonly'
      }
    }
  }
];