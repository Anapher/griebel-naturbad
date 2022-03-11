import {
  Container,
  createTheme,
  css,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3498db",
    },
    secondary: {
      main: "#27ae60",
      contrastText: "#FFFFFF",
    },
  },
});

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <NavigationBar />
        {children}
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
}
