import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import { makeStyles, Box, Typography, Divider } from "@material-ui/core";
import { container } from "../style/shared";
import typeMappings from "../utils/type-mapping";
import SEO from "../components/seo";

const useStyles = makeStyles({
  container: {
    ...container,
    marginTop: 24,
  },
});

export default function ProjectType({
  data: {
    allMdx: { edges },
    site: {
      siteMetadata: {
        templates: {
          projects: { pathPrefix },
        },
      },
    },
  },
  pageContext: { type },
}) {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title={`${typeMappings[type]} Projekte`} />
      <div className={classes.container}>
        <Box textAlign="center" padding={2} marginBottom={2}>
          <Box marginBottom={1}>
            <Typography
              color="secondary"
              variant="h5"
              style={{
                fontWeight: "bold",
              }}
            >
              {typeMappings[type]}
            </Typography>
          </Box>
          <Divider variant="middle" />
        </Box>
        <Projects projects={edges} pathPrefix={pathPrefix} disableTags />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($type: String!) {
    site {
      siteMetadata {
        templates {
          projects {
            pathPrefix
          }
        }
      }
    }
    allMdx(
      filter: { frontmatter: { type: { eq: $type } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date
            description
            id
            title
            type
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
