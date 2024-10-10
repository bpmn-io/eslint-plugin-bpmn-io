import { nodeImportedFn } from './node-imports';

const { Bar } = require('./bar');

nodeImportedFn();

module.exports = class Foo extends Bar {

  constructor(a, b, { c }) {
    super(a, c);
  }

  foo = (d) => {

    const [ _, blub ] = Blub.blub(...d);

    const foop = "Hello 'BLUB'";

    return {
      ...this.bar,
      blub,
      foop,
      d
    };
  };

  other = async (a) => {
    await this.b();
  };

  longArgFn(
      hello, world,
      wowo, wooooooooorld) {

    const a = {};

    const {
      c,
      d,
      ...rest
    } = a;

    return rest;
  }

};
