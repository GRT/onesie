import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import organizations from './organizations';

const rootReducer = combineReducers({organizations, routing: routerReducer});

export default rootReducer;