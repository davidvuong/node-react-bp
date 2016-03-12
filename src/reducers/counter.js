'use strict';
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';

const initialState = {
  count: 0
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
