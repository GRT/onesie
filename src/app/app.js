'use strict';

require('./components/style.css');
require('../static/favicon.ico');
import Main from './main.jsx';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(<Main/>, document.getElementById('main'));