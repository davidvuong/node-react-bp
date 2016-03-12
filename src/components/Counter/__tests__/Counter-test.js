import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Counter from '../Counter';

jest.unmock('../Counter.js');

describe('CounterComponent', () => {
  it('should render correctly when given count prop', () => {
    let count = 0;
    function onCounterIncrement() {
      count++;
    }

    const counter = TestUtils.renderIntoDocument(
      <Counter
        count={count}
        onCounterIncrement={onCounterIncrement}
        onCounterDecrement={() => {}}
      />
    );

    const counterNode = ReactDOM.findDOMNode(counter);
    expect(counterNode.children[0].textContent).toEqual('0');
  });
});
