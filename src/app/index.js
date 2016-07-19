'use strict';
require('../static/favicon.ico');
import App from './app.js';
import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

const router = (
	<Provider store={store}>
		<App/>
	</Provider>
	);

ReactDOM.render(router, document.getElementById('main'));