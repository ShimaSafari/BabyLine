import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import myTheme from "./theme.js";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <ThemeProvider theme={myTheme}>
        <App />
      </ThemeProvider>
    </ShopContextProvider>
  </BrowserRouter>
);
