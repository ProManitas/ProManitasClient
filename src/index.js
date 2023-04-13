import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/index";
import { Auth0ProviderWithNavigate } from "./Views/Login/auth0ProviderNavigate/auth0-provider-with-navigate";
import axios from "axios";

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

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Auth0ProviderWithNavigate>
            <App />
          </Auth0ProviderWithNavigate>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
