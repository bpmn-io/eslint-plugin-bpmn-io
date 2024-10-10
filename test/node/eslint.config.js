import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

export default [
  ...bpmnIoPlugin.configs.node,
  {
    languageOptions: {
      globals: {
        'Blub': 'readonly'
      }
    }
  }
];