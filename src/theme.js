import { createTheme } from "@mui/material";

const myTheme = createTheme({
  palette: {
    common: { main: "#FD0000" },
    primary: { main: "#E26666" },
    secondary: { main: "#E7F6DD " },
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
    fontWeightLight: 300,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    fontWeightBold: 800,
    h1: {
      fontSize: 50,
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h4:{
      fontSize: "24px",
      fontStyle: "bold",
      fontWeight: 700,
      lineHeight: "normal",
    }
  },
});
export default myTheme;
