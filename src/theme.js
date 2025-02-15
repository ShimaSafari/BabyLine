import { createTheme } from "@mui/material";

const myTheme = createTheme({
  palette: {
    primary: { main: "#E26666" },
    secondary: { main: "#E7F6DD " },
    common: { main: "#FD0000" },
    warning: { main: "#FF961A" },
    background: {
      paper: "#D9D9D9",
      default: "#f8eeee",
    },
    text: {
      primary: "#000000",
      secondary: "#545454",
    },
  },
  typography: {
    fontFamily: "Nunito",
    fontSize: 24,
    fontWeight: 800,
    h1: {
      fontSize: 50,
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h4: {
      fontSize: 26,
      fontStyle: "bold",
      fontWeight: 700,
      lineHeight: "normal",
    },
    body1: {
      color: "#000",
      fontSize: 24,
      fontStyle: "normal",
      fontWeight: 800,
      lineHeight: "normal",
    },
    body2: {
      color: "#000",
      opacity: 0.75,
      fontSize: 20,
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
  },
});
export default myTheme;
