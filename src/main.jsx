import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material";
import AppStore from "./store/AppStore.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
const theme = createTheme({
  palette: {
    primary: {
      dark: "#2C3333",
      contrastText: "#2E4F4F",
      main: "#0E8388",
      light: "#CBE4DE",
    },
    info: {
      dark: "#2C3333",
      contrastText: "#2E4F4F",
      main: "#0E8388",
      light: "#CBE4DE",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppStore>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </AppStore>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
