import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import myTheme from "./theme.js";
createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={myTheme}>
    <App />
  </ThemeProvider>
);
