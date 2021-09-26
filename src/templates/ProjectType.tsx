import { Box, Button, Card, CardActions, CardContent, Divider, makeStyles, Typography } from '@material-ui/core';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import Projects from '../components/ProjectsGrid';
import SEO from '../components/seo';
import { container } from '../style/shared';
import to from '../utils/to';
import typeMappings from '../utils/type-mapping';

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
      mdx: {
         excerpt,
         frontmatter: { manualExcerpt },
      },
   },
   pageContext: { type },
}: any) {
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
                        fontWeight: 'bold',
                     }}
                  >
                     {typeMappings[type]}
                  </Typography>
               </Box>
               <Divider variant="middle" />
            </Box>
            <Card>
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     Allgemeine Informationen
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                     {manualExcerpt || excerpt}
                  </Typography>
               </CardContent>
               <CardActions>
                  <Button color="secondary" {...to(`/services/${type}`)}>
                     Weiter lesen
                  </Button>
               </CardActions>
            </Card>
            <Box mt={4} mb={4}>
               <Projects
                  projects={edges.map((x: any) => ({
                     ...x.node.frontmatter,
                     featuredImage: getImage(x.node.frontmatter.featuredImage),
                  }))}
                  pathPrefix={pathPrefix}
                  disableTags
               />
            </Box>
         </div>
      </Layout>
   );
}

export const pageQuery = graphql`
   query ($type: String!) {
      site {
         siteMetadata {
            templates {
               projects {
                  pathPrefix
               }
            }
         }
      }
      allMdx(filter: { frontmatter: { type: { eq: $type } } }, sort: { fields: frontmatter___date, order: DESC }) {
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
                        gatsbyImageData(layout: CONSTRAINED, width: 600, aspectRatio: 1.777)
                     }
                  }
               }
            }
         }
      }
      mdx(frontmatter: { projectType: { eq: $type } }) {
         id
         excerpt(pruneLength: 250)
         frontmatter {
            manualExcerpt
         }
      }
   }
`;
