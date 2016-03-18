import Hello from "./components/hello.jsx";
import World from "./components/world.jsx";
import ReactDOM from 'react-dom';
import React from 'react';
import ips from './components/requests/get-ips'

ReactDOM.render(<World/>, document.getElementById('world'));
ReactDOM.render(<Hello/>, document.getElementById('hello'));

ips(console.log,
  {
    ooOrganization : 'GlobalProducts',
    ooAssembly : 'electrode-getting-started',
    ooEnvironment : 'prod',
    ooPlatform : 'electrode-nodejs'
  }, console.log);