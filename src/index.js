import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { createTheme } from "@mui/system";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#bc2525",
    },
    secondary: {
      main: "#646094",
    },
    background: {
      default: "#eaeaea",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
