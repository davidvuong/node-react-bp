import fetch from 'isomorphic-fetch';
import { FETCH_COLOR, SET_COLOR } from '../reducers/coloredSquare';

function fetchColor() {
  return (dispatch) => {
    dispatch({ type: FETCH_COLOR, status: 'fetching' });
    fetch('/api/random-color/').then(res => { return res.text(); }).then((data) => {
      // `setTimeout` to see loading message.
      setTimeout(() => {
        dispatch({ type: FETCH_COLOR, status: 'success', color: data });
        dispatch({ type: SET_COLOR, color: data });
      }, 1500);
    }).catch((err) => {
      dispatch({ type: FETCH_COLOR, status: 'failed', error: err });
    });
  };
}
export default { fetchColor };
