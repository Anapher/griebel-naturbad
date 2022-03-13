import {
  styled,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import React from "react";
import Achievements from "../site-components/index-sections/Achievements";
import FieldOfActivity from "../site-components/index-sections/FieldOfActivity";
import History from "../site-components/index-sections/History";
import Impressions from "../site-components/index-sections/Impressions";
import LandingPage from "../site-components/index-sections/LandingPage";
import Layout from "../site-components/Layout";
import SEO from "../site-components/SEO";

const ContentContainer = styled("div")(({ theme }) => ({
  background: "#FFFFFF",
  position: "relative",
  zIndex: 3,
  paddingTop: 15,
  [theme.breakpoints.up("sm")]: {
    paddingTop: 80,
  },
}));

const transparentUntil = 400;

export default function index() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const trigger = useScrollTrigger({
    threshold: isMobile ? 45 : transparentUntil,
    disableHysteresis: true,
  });

  return (
    <Layout navigationBarOverlay transparent={!trigger}>
      <SEO title="Home" />
      <LandingPage />
      <ContentContainer>
        <Impressions />
        <Achievements sx={{ mt: 8, mb: 5 }} />
        <FieldOfActivity />
        <History sx={{ my: 5 }} />
      </ContentContainer>
    </Layout>
  );
}
