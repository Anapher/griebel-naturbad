import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import {
  makeStyles,
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  CardActions,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { container } from "../style/shared";
import typeMappings from "../utils/type-mapping";
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
    mdx: { body, excerpt },
  },
  pageContext: { type },
}) {
  const classes = useStyles();
  const [isInfoExpanded, setIsInfoExpanded] = useState(false);

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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Informationen über {typeMappings[type]}
              <span style={{ fontSize: 14, opacity: 0.6, marginLeft: 16 }}>
                {excerpt}
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <article>{<MDXRenderer>{body}</MDXRenderer>}</article>
          </AccordionDetails>
        </Accordion>
        <Box mt={4}>
          <Projects projects={edges} pathPrefix={pathPrefix} disableTags />
        </Box>
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
    mdx(frontmatter: { projectType: { eq: $type } }) {
      id
      body
      excerpt(pruneLength: 250)
    }
  }
`;
