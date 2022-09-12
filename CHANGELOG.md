# Changelog

All notable changes to [eslint-plugin-bpmn-io](https://github.com/bpmn-io/eslint-plugin-bpmn-io) are documented here. We use [semantic versioning](http://semver.org/) for releases.

## Unreleased

___Note:__ Yet to be released changes appear here._

## 0.15.0

* `FEAT`: use ES2018 syntax in `recommended` config
* `FEAT`: drop `env#node` from `recommended` config
* `FEAT`: drop `es5` and `es6` configs
* `FEAT`: add `node` and `browser` configs
* `DEPS`: drop `@babel/eslint-parser` and related deps
* `DEPS`: drop `eslint@7` support

### Breaking changes

* ES2018 is the default syntax for `recommended`. If your source code uses newer syntax version, make sure to set `parserOptions#ecmaVersion` accordingly.
* `es5` and `es6` configs are removed. Use `node` or `browser` instead, depending on your environment.
* `eslint@7` is no longer supported. Upgrade to `eslint@8` to use the plugin.

## 0.14.1

* `FIX`: do not read local `.babelrc` file
* `DEPS`: bump dependencies

## 0.14.0

* `DEPS`: support `eslint@8` ([#14](https://github.com/bpmn-io/eslint-plugin-bpmn-io/pull/14))

## 0.13.0

* `FEAT`: add `space-infix-ops` rule ([#12](https://github.com/bpmn-io/eslint-plugin-bpmn-io/pull/12))
* `FEAT`: add `array-bracket-spacing` rule ([#12](https://github.com/bpmn-io/eslint-plugin-bpmn-io/pull/12))

### BREAKING CHANGES

* Added space-related rules to `recommended` which may trigger new errors.

## 0.12.0

* `CHORE`: bump dependencies
* `CHORE` mark as `eslint@7` compatible

## 0.11.0

* `FEAT`: enforce double quotes in JSX
* `CHORE`: bump dependencies

## 0.10.0

* `CHORE`: bump dependencies

## 0.9.0

* `FEAT`: enforce empty line before comment ([#6](https://github.com/bpmn-io/eslint-plugin-bpmn-io/pull/6))

## 0.8.2

* `FIX`: provide explicit `ecmaVersion`

## 0.8.1

* `FEAT`: support `eslint@6`

## 0.8.0

* `FEAT`: allow unused variables, starting with `_`

## 0.7.0

* `FEAT`: use `quotes` with `avoidEscape` rule

## ...

Check `git log` for earlier history.
