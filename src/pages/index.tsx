import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Parallax from "../components/Parallax";
import { makeStyles, Grid, Typography, Box } from "@material-ui/core";
import { container } from "../style/shared";
import Section from "../components/Section";
import Impressions from "./index/Impressions";
import FieldOfActivity from "./index/FieldOfActivity";
import History from "./index/History";
import Achievements from "./index/Achievements";

const useStyles = makeStyles({
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
});

const IndexPage = ({ data }: any) => {
  const classes = useStyles();
  return (
    <Layout transparentUntil={400} fixed overlayContent>
      <SEO title="Home" />
      <Parallax filter image={data.desktop.childImageSharp.fluid}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h2">Büro für Freiraumplanung</Typography>
              <Box marginTop={4}>
                <Typography variant="h4">dipl.-ing. Franz Griebel</Typography>
                <Typography variant="subtitle1">
                  Landschaftsarchitekt BDLA
                </Typography>
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
  }
`;
