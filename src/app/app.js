'use strict';
require('./components/style.css');
import ScrollArea from './components/scroll.jsx';
import DropDownComponent from './components/dropdown.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import orgs from './components/requests/get-orgs';
import assems from './components/requests/get-assemblies';
import envs from './components/requests/get-environments';

ReactDOM.render(React.createElement(ScrollArea, null), document.getElementById('main'));

let err = function err(e) { console.error(e); };

ReactDOM.render(<DropDownComponent ajaxFunc={orgs} ajaxParams={{}} />,
  document.getElementById('dropdown'));

assems(err, { ooOrganization : 'CorpOrg'}, (assemblies) => {
  console.log('Assemblies: ');
  console.log( JSON.stringify( assemblies, null, 2) );
});

envs(err, { ooOrganization : 'CorpOrg', ooAssembly : 'landline'}, (environments) => {
  console.log('Envs: ');
  console.log( JSON.stringify( environments, null, 2) );
});


ReactDOM.render(React.createElement(ScrollArea, null), document.getElementById('main'));
