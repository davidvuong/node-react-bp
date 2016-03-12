'use strict';
import { INCREMENT, DECREMENT } from '../reducers/counter';

function increment() {
  return { type: INCREMENT };
}
function decrement() {
  return { type: DECREMENT };
}

export default { increment, decrement };
