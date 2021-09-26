import React from 'react';
import Layout from '../components/Layout';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import { container } from '../style/shared';
import { graphql, navigate } from 'gatsby';
import Projects from '../components/ProjectsGrid';
import { Pagination } from '@material-ui/lab';
import SEO from '../components/seo';
import { node } from 'prop-types';
import { getImage } from 'gatsby-plugin-image';

const useStyles = makeStyles({
   container: {
      ...container,
      marginTop: 56,
      marginBottom: 56,
   },
});

export default function ProjectsAll({
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
         <SEO title={`Projekte - Seite ${currentPage}`} />
         <div className={classes.container}>
            <Projects
               projects={projects.map((x: any) => ({
                  ...x.node.frontmatter,
                  featuredImage: getImage(x.node.frontmatter.featuredImage),
               }))}
               pathPrefix={pathPrefix}
            />
            {totalPages > 1 && (
               <>
                  <Typography
                     variant="caption"
                     color="textSecondary"
                     style={{ display: 'block', marginTop: 32, marginBottom: 4 }}
                  >
                     Seite auswählen:
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
   query ($skip: Int!, $limit: Int!) {
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
               frontmatter {
                  id
                  title
                  description
                  type
                  date
                  featuredImage {
                     childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, width: 600, aspectRatio: 1.777)
                     }
                  }
               }
            }
         }
      }
   }
`;
