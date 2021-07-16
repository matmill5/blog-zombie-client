import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "../src/themes/theme";
import "typeface-bebas-neue";
import "typeface-courier-prime";
import "typeface-bangers";
import "./_index.scss";

dotenv.config();

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
