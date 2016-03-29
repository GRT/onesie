"use strict";
require("./components/style.css");
import ScrollArea from "./components/scroll.jsx";
import ClusterToggleView from 'onesie-toggle-environment-block';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(React.createElement(ScrollArea, null), document.getElementById("main"));
