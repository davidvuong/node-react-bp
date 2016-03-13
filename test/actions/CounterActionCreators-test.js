import expect from 'expect';
import actions from '../../src/actions/CounterActionCreators';
import * as types from '../../src/constants/ActionTypes';

describe('CounterActionCreators', () => {
  it('should create an action to increment counter', () => {
    const expectedAction = {
      type: types.INCREMENT
    };
    expect(actions.increment()).toEqual(expectedAction);
  });

  it('should create an action to decrement counter', () => {
    const expectedAction = {
      type: types.DECREMENT
    };
    expect(actions.decrement()).toEqual(expectedAction);
  })
});
