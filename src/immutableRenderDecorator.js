import React, { Component } from 'react';
import shouldComponentUpdate from './shouldComponentUpdate';
import hoistNonReactStatic from 'hoist-non-react-statics'
/**
 * Makes the given component "pure".
 *
 * @param object Target Component.
 */
export default function immutableRenderDecorator(Target) {
  class Wrapper extends Component {
    render() {
      return React.createElement(Target, this.props, this.props.children);
    }
  }

  Wrapper.prototype.shouldComponentUpdate = shouldComponentUpdate;

  return hoistNonReactStatic(Wrapper, Target);
}
