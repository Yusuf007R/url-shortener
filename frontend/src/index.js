import React from "react";
import ReactDOM from "react-dom";
import "./normalize.css";
import "./index.css";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
