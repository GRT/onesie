'use strict';
require('./components/style.css');
import ScrollArea from './components/scroll.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import ips from './components/requests/get-ips';
import orgs from './components/requests/get-orgs';

ReactDOM.render(React.createElement(ScrollArea, null), document.getElementById('main'));

ips(null, null, (iparray) => {
  console.log('IPs: ' + iparray );
});

orgs(null, (orgs) => {
  console.log('orgs: ' + orgs );
});

