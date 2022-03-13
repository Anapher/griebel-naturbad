import {
  Box,
  createTheme,
  CssBaseline,
  styled,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import Footer, { FOOTER_HEIGHT_PX } from "./Footer";
import NavigationBar, { NavigationBarProps } from "./NavigationBar";

const NavBarPlaceholder = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

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

type Props = NavigationBarProps & {
  children?: React.ReactNode;
  navigationBarOverlay?: boolean;
};

export default function Layout({
  children,
  navigationBarOverlay,
  ...props
}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <NavigationBar {...props} />
        <Box sx={{ minHeight: `calc(100vh - ${FOOTER_HEIGHT_PX}px)` }}>
          {!navigationBarOverlay && <NavBarPlaceholder />}
          {children}
        </Box>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
}
