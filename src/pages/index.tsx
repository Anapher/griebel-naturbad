import { makeStyles } from "@material-ui/core";
import { graphql } from "gatsby";
import React from "react";
import { Parallax } from "react-parallax";
import Layout from "../components/Layout";
import Section from "../components/Section";
import SEO from "../components/seo";
import Achievements from "./index/Achievements";
import FieldOfActivity from "./index/FieldOfActivity";
import History from "./index/History";
import Impressions from "./index/Impressions";
import LandingPage from "./index/LandingPage";

const useStyles = makeStyles(theme => ({
  content: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: 3,
  },
}));

const IndexPage = ({ data: { background2 } }: any) => {
  const classes = useStyles();

  return (
    <Layout transparentUntil={350} fixed overlayContent>
      <SEO title="Home" />
      <LandingPage />
      <div className={classes.content}>
        <Section title="Impressionen">
          <Impressions />
        </Section>
        <Section paddingBottom={8} paddingTop={0}>
          <Achievements />
        </Section>
        <Parallax
          strength={350}
          bgImage={background2.childImageSharp.fluid.srcWebp}
          bgImageSizes={background2.childImageSharp.fluid.sizes}
          bgImageSrcSet={background2.childImageSharp.fluid.srcSetWebp}
        >
          <Section title="Tätigkeitsfeld" dense style={{ color: "white" }}>
            <FieldOfActivity />
          </Section>
        </Parallax>
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
    background2: file(
      relativePath: { eq: "landing-page/background_field_of_activity.JPG" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
