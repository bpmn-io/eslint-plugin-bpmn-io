import React from 'react';

import FooComponent from './FooComponent';

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

  document.createElement('div');

  requestAnimationFrame(() => {});

  new URLSearchParams('foo=bar');

  const component = <FooComponent />;

  return {
    arrayBracketSpacing,
    multiSpace,
    trailingSpace,
    unused,
    objectCurlySpacing,
    semi,
    quotes,
    component
  };
}