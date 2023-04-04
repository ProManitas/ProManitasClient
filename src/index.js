import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import App from "./App";
// import { createTheme } from "@mui/system";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux"; // orovider para que redux reconozca lo que tenemos dentro 
import { store } from "./Redux/Store/index"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e7eaf6",
    },
    secondary: {
      main: "#113f67",
    },
    background: {
      default: "#a2a8d3",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Provider store={store}>
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
  </Provider>,
);
