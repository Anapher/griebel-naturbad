import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Parallax from "../components/Parallax";
import {
  makeStyles,
  Grid,
  Typography,
  Box,
  Button,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { container } from "../style/shared";
import Section from "../components/Section";
import Impressions from "./index/Impressions";
import FieldOfActivity from "./index/FieldOfActivity";
import History from "./index/History";
import Achievements from "./index/Achievements";
import to from "../utils/to";
import LogoWhite from "../assets/logo_white.svg";
import { Parallax as Parallax2 } from "react-parallax";

const useStyles = makeStyles(theme => ({
  container: {
    ...container,
    zIndex: 12,
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: -80,
  },
  content: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: 3,
  },
  titleText: {
    fontSize: 50,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down(380)]: {
      fontSize: 24,
    },
  },
  subtitleText: {
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
    [theme.breakpoints.down(380)]: {
      fontSize: 20,
    },
  },
  subtitleText2: {
    width: "100%",
    textAlign: "justify",
    textAlignLast: "justify",
    textJustify: "inter-character",
    fontSize: 25,
    marginTop: 12,

    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  logo: {
    width: 400,
    display: "block",
    marginLeft: -80,
    marginBottom: -25,
    [theme.breakpoints.down("sm")]: {
      width: 180,
      marginLeft: -15,
      marginBottom: -45,
    },
  },
}));

const IndexPage = ({
  data: {
    desktop,
    background2,
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
          <div>
            <LogoWhite className={classes.logo} />
            <Typography variant="h2" className={classes.titleText}>
              {title}
            </Typography>
            <Typography variant="h4" className={classes.subtitleText}>
              {subtitle}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitleText2}>
              Landschaftsarchitekt BDLA
            </Typography>
          </div>
        </div>
      </Parallax>
      <div className={classes.content}>
        <Section title="Impressionen">
          <Impressions />
        </Section>
        <Section paddingBottom={8} paddingTop={0}>
          <Achievements />
        </Section>
        <Parallax2
          strength={350}
          bgImage={background2.childImageSharp.fluid.srcWebp}
          bgImageSizes={background2.childImageSharp.fluid.sizes}
          bgImageSrcSet={background2.childImageSharp.fluid.srcSetWebp}
        >
          <Section title="Tätigkeitsfeld" dense style={{ color: "white" }}>
            <FieldOfActivity />
            <Box marginTop={4}>
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
          </Section>
        </Parallax2>
        <Section title="Geschichte" dense>
          <History />
        </Section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "landing-page/background2_65.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    background2: file(
      relativePath: { eq: "landing-page/background_field_of_activity.JPG" }
    ) {
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
