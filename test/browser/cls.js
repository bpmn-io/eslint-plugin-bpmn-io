import { Bar } from './bar';


export class Foo extends Bar {

  constructor(a, b, { c }) {
    super(a, c);
  }

  foo(d) {

    const [ _, blub ] = Blub.blub(...d);

    const foop = "Hello 'BLUB'";

    return {
      ...this.bar,
      blub,
      foop,
      d
    };
  }

  async other(a) {
    await this.b();
  }

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

  async asyncIterator() {
    const stream = new ReadableStream();

    for await (const chunk of stream) {
      console.log(chunk);
    }
  }

}