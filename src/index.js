import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { Provider } from "react-redux";

import store from "./Redux/store";

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById("root") || document.createElement("div")
);
