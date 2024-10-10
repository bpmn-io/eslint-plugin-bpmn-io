import Nested from './nested';

import React from 'react';

import { Component } from 'what';

export default class Blub extends Component {

  handleEvent(a, b) {
    console.log('event', a, b);
  }

  render() {

    return (
      <Nested
        text={ this.props.text }
        onChange={ this.handleEvent }
        key="value"
      >
        {
          this.props.values.map((v) => {
            return (
              <Nested.Val value={ v } key={ v.key } />
            );
          })
        }
      </Nested>
    );
  }
}