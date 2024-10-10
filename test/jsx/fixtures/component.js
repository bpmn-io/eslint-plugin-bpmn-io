import FooComponent from './FooComponent';

import React from 'react';

export async function foo() {
  const component = <FooComponent />;

  return {
    component
  };
}