import {
  AppBar,
  Box,
  ButtonBase,
  Container,
  IconButton,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import LogoSvg from "../assets/logo.svg";
import LogoWhiteSvg from "../assets/logo_white.svg";
import MenuIcon from "@mui/icons-material/Menu";
import NavigationBarButtons from "./NavigationBarButtons";
import NavigationDrawer from "./NavigationDrawer";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  border: 0,
  backgroundColor: "#fff",
  color: "#555",
  boxShadow:
    "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
  transition: "all 150ms ease 0s",
}));

type Props = {
  elevation?: number;
  transparent?: boolean;
  fixed?: boolean;
};

export default function SiteAppBar({ elevation, fixed, transparent }: Props) {
  const {
    site: {
      siteMetadata: {
        components: {
          appbar: { title, links },
        },
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          components {
            appbar {
              title
              links {
                title
                to
                children {
                  title
                  to
                }
              }
            }
          }
        }
      }
    }
  `);

  const theme = useTheme();
  const mobileLayout = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onToggleDrawer = () => setDrawerOpen((v) => !v);

  return (
    <AppBarStyled elevation={elevation} color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {mobileLayout && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="Menü öffnen"
              onClick={onToggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          <ButtonBase
            component={Link}
            to="/"
            sx={{ padding: 1, borderRadius: 0.5, height: 48 }}
          >
            {transparent ? (
              <LogoWhiteSvg style={{ width: 50 }} />
            ) : (
              <LogoSvg style={{ width: 50 }} />
            )}
            <Typography sx={{ fontSize: 20, marginLeft: 3 }} variant="h4">
              {title}
            </Typography>
          </ButtonBase>
          {!mobileLayout && (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              flexGrow={1}
            >
              <NavigationBarButtons links={links} />
            </Box>
          )}
          {mobileLayout && (
            <NavigationDrawer
              links={links}
              onClose={onToggleDrawer}
              open={drawerOpen}
            />
          )}
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
}
