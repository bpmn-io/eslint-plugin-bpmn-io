import Foo_component from './FooComponent';

export async function foo() {
  NotBlub.foo(); // eslint-disable-line no-undef

  const arrayBracketSpacing = [1, 2, 3]; // eslint-disable-line array-bracket-spacing

  if (false) { // eslint-disable-line no-constant-condition
      return; // eslint-disable-line indent
  }

  if(arrayBracketSpacing.length) { // eslint-disable-line keyword-spacing
    return;
  }

  const bitwise = 1 | 2; // eslint-disable-line no-bitwise

  const multiSpace  = true; // eslint-disable-line no-multi-spaces

  // eslint-disable-next-line no-trailing-spaces
  const trailingSpace = 'foo';  

  const unused = true; // eslint-disable-line no-unused-vars

  const objectCurlySpacing = {foo: 'bar'}; // eslint-disable-line object-curly-spacing

  const semi = 'foo' // eslint-disable-line semi

  const quotes = "foo"; // eslint-disable-line quotes

  document.createElement('div');

  requestAnimationFrame(() => {});

  new URLSearchParams('foo=bar');

  const component = <Foo_component />; // eslint-disable-line react/jsx-pascal-case, react/react-in-jsx-scope

  return {
    arrayBracketSpacing,
    bitwise,
    multiSpace,
    trailingSpace,
    objectCurlySpacing,
    semi,
    quotes,
    component
  };
}