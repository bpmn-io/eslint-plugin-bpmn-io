import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

export default [
  ...bpmnIoPlugin.configs.recommended,
  {
    languageOptions: {
      globals: {
        'Blub': 'readonly'
      }
    }
  }
];