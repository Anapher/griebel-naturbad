import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { makeStyles, Typography, Box, Link } from "@material-ui/core";
import { container } from "../style/shared";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Projects from "../components/Projects";
import typeMappings from "../utils/type-mapping";
import { Link as RouterLink } from "gatsby";
import SEO from "../components/seo";

const useStyles = makeStyles(theme => ({
  container: {
    ...container,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export default function Service({
  data: {
    site: {
      siteMetadata: {
        templates: {
          projects: { pathPrefix },
        },
      },
    },
    mdx: { body, excerpt },
    allMdx: { edges },
  },
  pageContext: { type },
}: any) {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title={typeMappings[type]} description={excerpt} />
      <div className={classes.container}>
        <article>
          <MDXRenderer>{body}</MDXRenderer>
        </article>

        <Box marginTop={8}>
          <Typography variant="h5">Projekte</Typography>
          <Box marginTop={2}>
            <Projects projects={edges} pathPrefix={pathPrefix} disableTags />
          </Box>
          <Box marginTop={2}>
            <Link component={RouterLink} to={`/projects/type/${type}`}>
              Alle {typeMappings[type]}-Projekte anzeigen
            </Link>
          </Box>
        </Box>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!, $type: String!) {
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
      limit: 6
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
    mdx(id: { eq: $id }) {
      body
      excerpt
    }
  }
`;
