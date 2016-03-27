import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Counter from '../../src/components/Counter/Counter';

function setup() {
  const props = {
    count: 0,
    onCounterIncrement: expect.createSpy(),
    onCounterDecrement: expect.createSpy()
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Counter {...props} />);
  const output = renderer.getRenderOutput();
  return { props, output, renderer };
}

describe('CounterComponent', () => {
  it('should render correctly when given count prop', () => {
    const { output } = setup();

    expect(output.props.className).toBe('counter');
    expect(output.props.children[0]).toBe(0);
  });
});
