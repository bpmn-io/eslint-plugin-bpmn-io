import Foo_component from './FooComponent';

export async function foo() {

  const component = <Foo_component />; // eslint-disable-line react/jsx-pascal-case, react/react-in-jsx-scope

  return {
    component
  };
}