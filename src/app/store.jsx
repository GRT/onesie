import { createStore , compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

//Create default data


const defaultState = {
	organizations: {selected: null , items: []} ,
	assemblies: {organization: null , items: []} //current assembly
}

const store = createStore(rootReducer , defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;