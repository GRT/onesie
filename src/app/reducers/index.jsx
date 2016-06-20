import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import organizations from './organizations';
import assemblies from './assemblies';

const rootReducer = combineReducers({organizations , assemblies , routing: routerReducer});


export default rootReducer;