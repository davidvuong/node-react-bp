'use strict';
import { combineReducers } from 'redux';
import counter from './counter';
import coloredSquare from './coloredSquare';

const reducer = combineReducers({
  counter, coloredSquare
});
export default reducer;
