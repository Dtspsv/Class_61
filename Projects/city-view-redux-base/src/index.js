import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import for redux
import {createStore} from "redux"
import {Provider} from "react-redux";
import reducers from "./reducers";


const reduxStore = createStore(reducers)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={reduxStore}>
          <App />
      </Provider>

  </React.StrictMode>,
  document.getElementById("root")
);


