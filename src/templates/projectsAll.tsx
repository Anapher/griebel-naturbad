import React from "react";
import Layout from "../components/Layout";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { container } from "../style/shared";
import { graphql, navigate } from "gatsby";
import Projects from "../components/Projects";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles({
  container: {
    ...container,
    marginTop: 24,
  },
});

export default function projectsAll({
  data: {
    site: {
      siteMetadata: {
        templates: {
          projects: { pathPrefix },
        },
      },
    },
    allMdx: { edges: projects },
  },
  pageContext: { totalPages, currentPage },
}: any) {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.container}>
        <Projects projects={projects} pathPrefix={pathPrefix} />
        {totalPages > 1 && (
          <>
            <Typography
              variant="caption"
              color="textSecondary"
              style={{ display: "block", marginTop: 32, marginBottom: 4 }}
            >
              Select page:
            </Typography>
            <Pagination
              page={currentPage}
              count={totalPages}
              onChange={(_, page) => navigate(`/${pathPrefix}/page/${page}`)}
            />
          </>
        )}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
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
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fileAbsolutePath
          frontmatter {
            id
            title
            description
            type
            date
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
