import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import for redux
import {applyMiddleware, createStore} from "redux"
import {Provider} from "react-redux";
import reducers from "./reducers";

// import for thunk
import thunk from "redux-thunk";


const reduxStore = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
      <Provider store={reduxStore}>
          <App />
      </Provider>

  </React.StrictMode>,
  document.getElementById("root")
);


