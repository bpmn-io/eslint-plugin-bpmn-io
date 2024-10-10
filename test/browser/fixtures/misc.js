import inherits from 'inherits-browser';

inherits({}, {});

export async function foo() {
  Blub.foo();

  const arrayBracketSpacing = [ 1, 2, 3 ];

  if (arrayBracketSpacing.length) {
    return;
  }

  const multiSpace = true;

  const trailingSpace = 'foo';

  const unused = true;

  const objectCurlySpacing = { foo: 'bar' };

  const semi = 'foo';

  const quotes = 'foo';

  try { /* empty */ } catch (error) { /* empty */ }

  document.createElement('div');

  requestAnimationFrame(() => {});

  new URLSearchParams('foo=bar');

  return {
    arrayBracketSpacing,
    multiSpace,
    trailingSpace,
    unused,
    objectCurlySpacing,
    semi,
    quotes
  };
}