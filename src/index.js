import React from "react";
import ReactDom from "react-dom";

// App.jsからimport
import App from "./App";

// React 18 ではあまりよくない！！
ReactDom.render(<App />, document.getElementById("root"));
