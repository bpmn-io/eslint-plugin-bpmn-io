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

export function unusedArgs(unusedArg) {
  const _unusedVar = true;
}

console.log('test');
new AbortController();
