import {
  Box,
  Chip,
  Divider,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { DateTime } from "luxon";
import React from "react";
import Layout from "../components/Layout";
import { container } from "../style/shared";
import typeMappings from "../utils/type-mapping";
import SEO from "../components/seo";

const useStyles = makeStyles(theme => ({
  container: {
    ...container,
    marginTop: 24,
    marginBottom: 24,
  },
  titleContainer: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  article: {
    lineHeight: 1.6,
    fontFamily: "Merriweather, Georgia, serif",
    fontSize: "1.1rem",
    "& blockquote": {
      borderLeft: "3px solid #303032",
      marginLeft: -16,
      paddingLeft: 13,
      fontStyle: "italic",
    },
  },
  chip: {
    marginRight: 4,
  },
}));

export default function Project({
  data: {
    mdx: {
      body,
      excerpt,
      frontmatter: { title, date, type, description },
    },
  },
}: any) {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <SEO title={title} description={description || excerpt} />
      <div className={classes.container}>
        <Box marginBottom={4}>
          <div className={classes.titleContainer}>
            <div>
              <div className={classes.titleContainer}>
                <Typography
                  variant="h4"
                  style={{
                    fontFamily:
                      "Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
                  }}
                >
                  {title}
                </Typography>
                <Chip
                  label={typeMappings[type]}
                  component={Link}
                  to={`/projects/type/${type}`}
                  clickable
                  color="secondary"
                  size={isSmall ? "small" : "medium"}
                  style={{
                    marginBottom: isSmall ? 8 : 0,
                    marginLeft: isSmall ? 0 : 24,
                  }}
                />
              </div>
              <Typography variant="body2">
                {DateTime.fromISO(date).toLocaleString({ year: "numeric" })}
              </Typography>
            </div>
          </div>
          <Box marginY={2}>
            <Divider />
          </Box>
        </Box>
        <article className={classes.article}>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(frontmatter: { id: { eq: $id } }) {
      body
      excerpt(pruneLength: 125)
      frontmatter {
        id
        title
        type
        date
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
