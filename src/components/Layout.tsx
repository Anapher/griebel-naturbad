import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, Box } from "@material-ui/core";
import theme from "../style/theme";
import Appbar from "./Appbar";
import Footer from "./Footer";
import "../style/layout.css";

type Props = {
  elevateAppBar?: boolean;
  children?: React.ReactNode;
  transparentUntil?: number;
};

export default function Layout({
  children,
  elevateAppBar,
  transparentUntil,
}: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleToggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar
        transparentUntil={transparentUntil}
        onToggleDrawer={handleToggleDrawer}
        elevation={Number(elevateAppBar)}
      />
      {children}
      <Footer />
      {/* <Drawer open={isDrawerOpen} onClose={handleToggleDrawer} /> */}
    </ThemeProvider>
  );
}
