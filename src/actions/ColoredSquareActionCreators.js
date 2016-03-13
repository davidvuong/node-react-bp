import fetch from 'isomorphic-fetch';
import config from '../config';
import { FETCH_COLOR, SET_COLOR } from '../constants/ActionTypes';

function fetchColorInit() {
  return { type: FETCH_COLOR, status: 'fetching' };
}

function fetchColorSuccess(color) {
  return { type: FETCH_COLOR, status: 'success', color };
}

function fetchColorError(error) {
  return { type: FETCH_COLOR, status: 'failed', error };
}

function setColor(color) {
  return { type: SET_COLOR, color };
}

function fetchColor() {
  return (dispatch) => {
    dispatch(fetchColorInit());
    return fetch(`${config.ENDPOINT}/api/random-color/`).then(
        res => { return res.text(); }
    ).then((data) => {
      dispatch(fetchColorSuccess(data));
      dispatch(setColor(data));
    }).catch((err) => {
      dispatch(fetchColorError(err));
    });
  };
}
export default { fetchColor, setColor };
