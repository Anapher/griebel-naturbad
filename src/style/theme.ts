import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#3498db",
    },
    secondary: {
      main: "#27ae60",
      contrastText: "#FFFFFF",
    },
    type: "light",
    text: {
      primary: "#101012",
      secondary: "#545456",
    },
    error: {
      main: "#d32f2f",
    },
    success: {
      main: "#28a745",
    },
  },
});
