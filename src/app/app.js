'use strict';
require('./components/style.css');
import ScrollArea from './components/scroll.jsx';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(React.createElement(ScrollArea, null), document.getElementById('main'));
