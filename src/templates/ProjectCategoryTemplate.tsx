import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../site-components/Layout";
import ProjectCard from "../site-components/ProjectCard";
import SEO from "../site-components/SEO";
import projectTypeTranslation from "../utils/project-type-translation";

export default function ProjectCategoryTemplate({
  data: {
    allMdx: { edges },
    site: {
      siteMetadata: {
        urls: { projectPrefix },
      },
    },
  },
  pageContext: { id },
}: any) {
  return (
    <Layout>
      <SEO title={projectTypeTranslation[id]} />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box textAlign="center" padding={2} marginBottom={2}>
          <Box marginBottom={1}>
            <Typography
              color="secondary"
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              {projectTypeTranslation[id]}
            </Typography>
          </Box>
          <Divider variant="middle" />
        </Box>
        <Grid container>
          {edges.map(
            ({
              node: {
                frontmatter: { id, year, title, featuredImage },
              },
            }: any) => (
              <Grid item key={id} xs={12} sm={4}>
                <ProjectCard
                  title={title}
                  url={`/${projectPrefix}${id}`}
                  image={getImage(featuredImage)!}
                  year={year}
                />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        urls {
          projectPrefix
        }
      }
    }
    allMdx(
      filter: { frontmatter: { type: { eq: $id } } }
      sort: { fields: frontmatter___year, order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            id
            year
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 600
                  aspectRatio: 1.777
                )
              }
            }
          }
        }
      }
    }
    mdx(frontmatter: { id: { eq: $id } }) {
      excerpt(pruneLength: 250)
    }
  }
`;
