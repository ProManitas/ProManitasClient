import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"

// import "/.index.css"; 
import App from "./App";
import { Provider } from "react-redux"; // orovider para que redux reconozca lo que tenemos dentro 
import { store } from "./Redux/Store/index"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  </Provider>,

  document.getElementById('root')
);


