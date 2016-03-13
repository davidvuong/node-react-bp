import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';

import actions from '../../src/actions/ColoredSquareActionCreators';
import * as types from '../../src/constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ColoredSquareActionCreators', () => {
  afterEach(() => {
    nock.cleanAll(); // https://github.com/pgte/nock#cleanall
  });

  it('should create async action when fetching color', (done) => {
    const responseBody = '#FFFFFF';

    nock('http://localhost:8000')
      .get('/api/random-color/')
      .reply(200, responseBody);

    const expectedActions = [
      { type: types.FETCH_COLOR, status: 'fetching' },
      { type: types.FETCH_COLOR, status: 'success', color: responseBody },
      { type: types.SET_COLOR, color: responseBody }
    ];
    const store = mockStore({
      coloredSquare: {
        color: '#000000',
        status: 'idle'
      }
    });
    store.dispatch(actions.fetchColor()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done()
    });
  })
});
