'use strict';
require('./components/style.css');
import ScrollArea from './components/scroll.jsx';
import DropDownComponent from './components/dropdown.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import ips from './components/requests/get-ips';
import orgs from './components/requests/get-orgs';


ips(null, null, (iparray) => {
  console.log('IPs: ' + iparray );
});

//var organizations = ['GRT','Mr. Lee\'s Greater Hong Kong','Nova Sicilia','The Raft','Reverend Wayne\'s Pearly Gates']
orgs(null, (orgs) => {
  console.log('orgs: ' + orgs );
  ReactDOM.render(<DropDownComponent organizations={orgs}/>, document.getElementById('dropdown'));
});

ReactDOM.render(React.createElement(ScrollArea, null), document.getElementById('main'));
