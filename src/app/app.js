"use strict";

import Hello from "./components/hello.jsx";
import World from "./components/world.jsx";
import ScrollArea from "./components/scroll.jsx";
import ReactDOM from 'react-dom';
import React from 'react';

//ReactDOM.render(<World/>, document.getElementById('world'));
//ReactDOM.render(<Hello/>, document.getElementById('hello'));

ReactDOM.render(React.createElement(ScrollArea, null), document.getElementById("main"));
