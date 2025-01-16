function topLevel() {
  return Promise.resolve();
}

await topLevel();

class Foo {
  static classField = 'Hello';

  #privateClassField = 'World';

  #privateMethod() {
    return `${Foo.classField} ${this.#privateClassField}`;
  }

  publicMethod() {
    return this.#privateMethod();
  }
}

const a = new Foo;
a.publicMethod();

class ClassWithStaticInitializationBlock {
  static staticProperty1 = 'Property 1';
  static staticProperty2;
  static {
    this.staticProperty2 = 'Property 2';
  }
}

ClassWithStaticInitializationBlock.staticProperty1;
ClassWithStaticInitializationBlock.staticProperty2;