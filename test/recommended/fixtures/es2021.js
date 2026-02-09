function configExample(options) {
  options.foo ??= true;
  options.bar ??= 'baz';
  return options;
}

configExample({ foo: false }); // { foo: false, bar: 'baz' }
configExample({}); // { foo: true, bar: 'baz' }

let logicalAnd = true;
logicalAnd &&= false; // updated to false

logicalAnd &&= true; // still false

console.log(logicalAnd);

let logicalOr = false;
logicalOr ||= true; // updated to true

logicalOr ||= 'new'; // still true

console.log(logicalOr);

const a = new WeakRef({});
a.deref();
