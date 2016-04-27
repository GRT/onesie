'use strict';
require('./components/style.css');
import ScrollArea from './components/scroll.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import ips from './components/requests/get-ips';
import orgs from './components/requests/get-orgs';
import assems from './components/requests/get-assemblies';

ReactDOM.render(React.createElement(ScrollArea, null), document.getElementById('main'));

let err = function err(e) { console.error(e); };


ips(err, null, (iparray) => {
  console.log('IPs: ' + iparray );
});

orgs(err, (orgs) => {
  console.log('orgs: ' + orgs );
});

assems(err, { ooOrganization : 'CorpOrg'}, (assemblies) => {
  console.log('Assemblies: ' + assemblies );
});


