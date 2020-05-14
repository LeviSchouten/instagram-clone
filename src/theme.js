import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "##66CDD9",
      main: "#04ADBF",
      dark: "#025373",
      contrastText: "#fff"
    },
    secondary: {
      light: "#adcbe3",
      main: "#4b86b4",
      dark: "#2a4d69",
      contrastText: "#e7eff6"
    }
  },
  spacing: value => value * 2
});

export default theme;
