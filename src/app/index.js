'use strict';
require('../static/favicon.ico');
import App from './app.js';
import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import store from './store';
import { grtGiant } from 'grt-console';

const router = (
	<Provider store={store}>
		<App/>
  </Provider>
  );

ReactDOM.render(router, document.getElementById('main'));

grtGiant('Made with love by: ');