import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, Box, makeStyles, Theme } from "@material-ui/core";
import theme from "../style/theme";
import Appbar from "./Appbar";
import Footer from "./Footer";
import "../style/layout.css";

type Props = {
  elevateAppBar?: boolean;
  children?: React.ReactNode;
  transparentUntil?: number;
  fixed?: boolean;
  overlayContent?: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  appbarPlaceholder: {
    ...theme.mixins.toolbar,
  },
}));

export default function Layout({
  children,
  elevateAppBar,
  transparentUntil,
  fixed = true,
  overlayContent = false,
}: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleToggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar
        fixed={fixed}
        transparentUntil={transparentUntil}
        onToggleDrawer={handleToggleDrawer}
        elevation={elevateAppBar ? 1 : 0}
      />
      {!overlayContent && <div className={classes.appbarPlaceholder} />}
      {children}
      <Footer />
      {/* <Drawer open={isDrawerOpen} onClose={handleToggleDrawer} /> */}
    </ThemeProvider>
  );
}
