import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

//Create default store
const defaultState = {
  organizations: { selected: null , items: {}, config: {token: '', host: ''}}
};

const store = createStore(rootReducer , defaultState, window.devToolsExtension && window.devToolsExtension());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
