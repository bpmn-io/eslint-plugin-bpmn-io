# eslint-plugin-bpmn-io

[![CI](https://github.com/bpmn-io/eslint-plugin-bpmn-io/workflows/CI/badge.svg)](https://github.com/bpmn-io/eslint-plugin-bpmn-io/actions?query=workflow%3ACI)

Common lint rules for [bpmn.io](https://bpmn.io) projects.


## Use

Extend one or more of our recommended configurations:

```javascript
import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

export default [
  ...bpmnIoPlugin.configs.recommended
]
```

If you use [mocha](https://mochajs.org/) for testing, add the mocha profile to your specs:

```javascript
import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

export default [
  ...bpmnIoPlugin.configs.browser,
  ...bpmnIoPlugin.configs.mocha.map(config => {
    return {
      ...config,
      files: [
        '**/*.spec.js'
      ]
    };
  })
]
```


## Available Configurations

Base configurations:

* `browser`: Use for browser based projects
* `node`: Use for node based projects
* `recommended`: Use for libraries where no environment is assumed

Special purpose configurations:

* `jsx`: Use `jsx` in conjunction with `browser`
* `mocha`: Use for libraries tested with `mocha` + `chai`


## License

MIT
