import { FETCH_COLOR, SET_COLOR } from '../constants/ActionTypes';

const initialState = {
  status: 'idle',
  error: null,
  color: '#ffffff'
};

function fetchReducer(state, action) {
  switch (action.status) {
    case 'fetching':
    case 'success':
      return { ...state, status: action.status };
    case 'failed':
      return { ...state, status: action.status, error: action.error };
    default:
      return state;
  }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COLOR:
      return fetchReducer(state, action);
    case SET_COLOR:
      return { ...state, color: action.color };
    default:
      return state;
  }
};
