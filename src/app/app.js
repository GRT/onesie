'use strict';
require('./components/style.css');
import ScrollArea from './components/scroll.jsx';
import DropDownComponent from './components/dropdown.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import orgs from './components/requests/get-orgs';
import assems from './components/requests/get-assemblies';

ReactDOM.render(<DropDownComponent ajaxFunc={orgs} ajaxParams={{}} />,
  document.getElementById('dropdown'));

ReactDOM.render(<ScrollArea ajaxFunc={assems} ajaxParams={{ooOrganization:'CorpOrg'}} />,
  document.getElementById('main'));
