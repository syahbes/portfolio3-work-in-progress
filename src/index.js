import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {/* <Container maxWidth="sm"> */}
    {/* <Container maxWidth="100%"> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Container> */}
  </ThemeProvider>
);
