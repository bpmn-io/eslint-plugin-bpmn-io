import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

import { merge } from 'min-dash';

export default [
  ...bpmnIoPlugin.configs.mocha,
  ...bpmnIoPlugin.configs.browser.map(config => {

    return merge({}, config, {
      files: [
        '**/browser/*.js'
      ]
    });
  }),
  ...bpmnIoPlugin.configs.node.map(config => {
    return merge({}, config, {
      files: [
        '**/node/*.js'
      ]
    });
  })
];