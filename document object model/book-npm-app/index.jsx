import React from "react";
import ReactDOM from "react-dom/client";    //WOrk when type "module" is used in package.json file
//use babel as js compiler to convert jsx to js
import App from "./app.jsx";
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App />);
/* 
bundler->webpack,parcel,es-modules,rollup
^ symbol means latest version of package
~ symbol means latest minor version of package
*/