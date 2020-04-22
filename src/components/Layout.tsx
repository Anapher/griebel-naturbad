import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, Box, makeStyles, Theme } from "@material-ui/core";
import theme from "../style/theme";
import Appbar from "./Appbar";
import Footer, { FOOTER_HEIGHT_PX } from "./Footer";
import "../style/layout.css";
import Helmet from "react-helmet";

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
  content: {
    minHeight: `calc(100vh - ${FOOTER_HEIGHT_PX}px)`,
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
      <div className={classes.content}>
        {!overlayContent && <div className={classes.appbarPlaceholder} />}
        {children}
      </div>
      <Footer />
      {/* <Drawer open={isDrawerOpen} onClose={handleToggleDrawer} /> */}
    </ThemeProvider>
  );
}
