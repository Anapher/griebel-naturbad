import {
  Box,
  Chip,
  Divider,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { DateTime } from "luxon";
import React from "react";
import Layout from "../components/Layout";
import SpecificationsTable from "../components/mdx/SpecificationsTable";
import { container } from "../style/shared";
import typeMappings from "../utils/type-mapping";
import typographyTheme from "../utils/typography";
import typographyMDX from "../utils/typography-mdx";
import MdxCarousel, { CarouselImage } from "../components/mdx/MdxCarousel";

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

// const MyH1 = props => <h1 style={{ color: "tomato" }} {...props} />;
// const MyParagraph = props => (
//   <p style={{ fontSize: "18px", lineHeight: 1.6 }} />
// );

const defaultComponents = {
  SpecificationsTable: props => <SpecificationsTable {...props} />,
  Carousel: props => <MdxCarousel {...props} />,
  CarouselImage: props => <CarouselImage {...props} />,
};

export default function project({
  data: {
    mdx: {
      body,
      frontmatter: { title, date, type },
    },
  },
}: any) {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const { Root, typography, ...components } = typographyMDX(typographyTheme);

  return (
    <Layout>
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
                {DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)}
              </Typography>
            </div>
          </div>
          <Box marginY={2}>
            <Divider />
          </Box>
        </Box>
        <article className={classes.article}>
          <MDXProvider components={{ ...components, ...defaultComponents }}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($postId: String!) {
    mdx(frontmatter: { id: { eq: $postId } }) {
      body
      frontmatter {
        id
        title
        type
        date
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
