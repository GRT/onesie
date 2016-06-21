import { createStore , compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

//Create default data


const defaultState = {
	organizations: { items: []} ,
	assemblies: {organization: null , items: []}
}

const store = createStore(rootReducer , defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;