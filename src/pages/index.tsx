import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Parallax from "../components/Parallax";
import { makeStyles, Grid, Typography, Box, Button } from "@material-ui/core";
import { container } from "../style/shared";
import Section from "../components/Section";
import Impressions from "./index/Impressions";
import FieldOfActivity from "./index/FieldOfActivity";
import History from "./index/History";
import Achievements from "./index/Achievements";
import to from "../utils/to";
import LogoWhite from "../assets/logo_white.svg";

const useStyles = makeStyles(theme => ({
  container: {
    ...container,
    zIndex: 12,
    color: "#FFFFFF",
  },
  content: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: 3,
  },
  sectionContainer: {
    ...container,
    zIndex: 12,
    color: "#000",
    paddingTop: 24,
  },
  titleText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: 132,
    },
  },
  subtitleText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
  },
  logo: {
    width: 100,
    marginRight: 32,
    display: "block",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const IndexPage = ({
  data: {
    desktop,
    site: {
      siteMetadata: { title, subtitle },
    },
  },
}: any) => {
  const classes = useStyles();

  return (
    <Layout transparentUntil={350} fixed overlayContent>
      <SEO title="Home" />
      <Parallax filter image={desktop.childImageSharp.fluid}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h2" className={classes.titleText}>
                {title}
              </Typography>
              <Box display="flex" flexDirection="row" alignItems="center">
                <LogoWhite className={classes.logo} />
                <Box>
                  <Typography variant="h4" className={classes.subtitleText}>
                    {subtitle}
                  </Typography>
                  <Typography variant="subtitle1">
                    Landschaftsarchitekt BDLA
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <div className={classes.content}>
        <div className={classes.sectionContainer}>
          <Section title="Impressionen">
            <Impressions />
          </Section>
          <Box marginBottom={4}>
            <Achievements />
          </Box>
          <Section title="Tätigkeitsfeld" dense>
            <FieldOfActivity />
          </Section>
          <Box marginBottom={3}>
            <Grid container spacing={3}>
              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  {...to("/references")}
                >
                  Referenzen
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  {...to("/projects/page/1")}
                >
                  Zu meinen Projekten
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Section title="Geschichte" dense>
            <History />
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "landing-page/background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;
