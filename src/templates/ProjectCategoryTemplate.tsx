import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../site-components/Layout";
import ProjectCard from "../site-components/ProjectCard";
import SEO from "../site-components/SEO";
import projectTypeTranslation from "../utils/project-type-translation";
import to from "../utils/to";

export default function ProjectCategoryTemplate({
  data: {
    allMdx: { edges },
    site: {
      siteMetadata: {
        urls: { projectPrefix, projectCategoryPrefix },
      },
    },
  },
  pageContext: { type },
}: any) {
  return (
    <Layout>
      <SEO title={projectTypeTranslation[type]} />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box textAlign="center" paddingY={3} marginBottom={2}>
          <Box marginBottom={1}>
            <Typography
              color="secondary"
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              {projectTypeTranslation[type]}
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Alert sx={{ mt: 3 }} severity="info">
            Allgemeine Informationen finden Sie{" "}
            <Link {...to(`/${projectCategoryPrefix}${type}`)}>hier</Link>
          </Alert>
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
  query ($type: String!) {
    site {
      siteMetadata {
        urls {
          projectPrefix
          projectCategoryPrefix
        }
      }
    }
    allMdx(
      filter: { frontmatter: { type: { eq: $type } } }
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
    mdx(frontmatter: { id: { eq: $type } }) {
      excerpt(pruneLength: 250)
    }
  }
`;
