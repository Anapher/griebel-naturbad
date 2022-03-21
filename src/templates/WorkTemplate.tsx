import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../site-components/Layout";
import ProjectCard from "../site-components/ProjectCard";
import SEO from "../site-components/SEO";
import projectTypeTranslation from "../utils/project-type-translation";
import { Link as RouterLink } from "gatsby";

export default function WorkTemplate({
  data: {
    site: {
      siteMetadata: {
        urls: { projectsPrefix, projectPrefix },
      },
    },
    mdx: { body, excerpt },
    allMdx: { edges },
  },
  pageContext: { id },
}: any) {
  return (
    <Layout>
      <SEO title={projectTypeTranslation[id]} description={excerpt} />
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <article>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
        <Box marginTop={8}>
          <Grid container sx={{ mt: 2 }} spacing={2}>
            {edges.map(
              ({
                node: {
                  frontmatter: { id, year, title, featuredImage },
                },
              }: any) => (
                <Grid
                  item
                  key={id}
                  xs={12}
                  sm={4}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
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
          <Box marginTop={2}>
            <Link component={RouterLink} to={`/${projectsPrefix}${id}`}>
              Alle {projectTypeTranslation[id]}-Projekte anzeigen
            </Link>
          </Box>
        </Box>
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
          projectsPrefix
        }
      }
    }
    allMdx(
      filter: { frontmatter: { type: { in: [$id] } } }
      limit: 6
      sort: { fields: frontmatter___year, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            id
            title
            year
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
      body
      excerpt(pruneLength: 200)
    }
  }
`;
