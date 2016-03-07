import Hello from "./components/hello.jsx";
import World from "./components/world.jsx";
import ReactDOM from 'react-dom';
import React from 'react';


ReactDOM.render(<World/>, document.getElementById('world'));
ReactDOM.render(<Hello/>, document.getElementById('hello'));
