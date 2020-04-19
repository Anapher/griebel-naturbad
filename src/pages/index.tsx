import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Parallax from "../components/Parallax";
import { makeStyles, Grid } from "@material-ui/core";
import { container } from "../style/shared";

const useStyles = makeStyles({
  container: {
    ...container,
    zIndex: 12,
    color: "#FFFFFF",
  },
  title: {
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
  },
  content: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: 3,
  },
});

const IndexPage = ({ data }: any) => {
  const classes = useStyles();
  return (
    <Layout transparentUntil={400}>
      <SEO title="Home" />
      <Parallax filter image={data.desktop.childImageSharp.fluid}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <div className={classes.content}>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "landing_page_background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
