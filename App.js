import React from 'react';
import ReactDOM from 'react-dom/client';

const heading= React.createElement("div",{
    id:'heading',xyz:'abc'
},React.createElement("div", {id:'child'},[React.createElement("h1",{},'I am Child 1'),
React.createElement("h2",{},'I am Child 2')]));

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
