import {
  AppBar,
  Box,
  ButtonBase,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  useMediaQuery,
} from "@material-ui/core";
import classNames from "classnames";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { container } from "../style/shared";
import AppBarLinks from "./AppbarLinks";

const useStyles = makeStyles(theme => ({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
  },
  container: {
    ...container,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: 25,
    color: "#FFFFFF",
  },
  titleButton: {
    padding: theme.spacing(1),
    borderRadius: 4,
    height: 48,
  },
  fixed: {
    position: "fixed",
    zIndex: 1100,
  },
}));

type Props = {
  elevation: number;
  onToggleDrawer: () => void;
  transparentUntil?: number;
  fixed?: boolean;
};

export default ({
  elevation = 1,
  onToggleDrawer,
  transparentUntil,
  fixed = false,
}: Props) => {
  const classes = useStyles();
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

  const {
    site: {
      siteMetadata: {
        title,
        components: {
          appbar: { navigation },
        },
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          components {
            appbar {
              navigation {
                links {
                  title
                  url
                }
                title
                url
              }
            }
          }
          title
        }
      }
    }
  `);

  const [isTransparent, setIsTransparent] = useState(true);

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;

    if (transparentUntil !== undefined)
      setIsTransparent(windowsScrollTop < transparentUntil);
  };

  useEffect(() => {
    if (transparentUntil) {
      window.addEventListener("scroll", headerColorChange);
      return () => window.removeEventListener("scroll", headerColorChange);
    }
  }, [transparentUntil]);

  return (
    <AppBar
      color="primary"
      elevation={elevation}
      className={classNames({
        [classes.appBar]: true,
        [classes.fixed]: fixed,
        [classes.transparent]: isTransparent && transparentUntil,
      })}
    >
      <Toolbar className={classes.container}>
        {isXs && (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onToggleDrawer}
          >
            <MdMenu />
          </IconButton>
        )}
        <Box display="flex" flexGrow={1}>
          <ButtonBase
            component={Link}
            to="/"
            classes={{ root: classes.titleButton }}
          >
            {title}
          </ButtonBase>
        </Box>
        {
          // Display the appbar action links if the media query breakpoint is larger than Xs.
          !isXs && <AppBarLinks navigation={navigation} />
        }
      </Toolbar>
    </AppBar>
  );
};
