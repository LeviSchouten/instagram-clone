import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "##66CDD9",
      main: "#04ADBF",
      dark: "#025373",
      contrastText: "#fff"
    }
  },
  status: {
    danger: "orange"
  },
  spacing: value => value * 2
});

export default theme;
