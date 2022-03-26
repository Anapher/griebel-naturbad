import {
  Chip,
  Container,
  Divider,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { useMemo } from "react";
import Layout from "../site-components/Layout";
import SEO from "../site-components/SEO";
import projectTypeTranslation from "../utils/project-type-translation";
import { parseKeyValueTextContent } from "../utils/string-extensions";
import ProjectCarousel, {
  renderTextOverlay,
} from "./project-template/ProjectCarousel";
import SpecificationsTable from "./project-template/SpecificationsTable";

export default function ProjectTemplate({
  data: {
    mdx: {
      body,
      frontmatter: { title, type, year },
    },
    site: {
      siteMetadata: {
        urls: { projectCategoryPrefix },
      },
    },
    allFile: { edges: carouselImages },
    file: {
      childPlainText: { content },
    },
  },
}: any) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const hasCarousel = carouselImages.length > 0;

  const specifications = useMemo(
    () => parseKeyValueTextContent(content),
    [content]
  );

  return (
    <Layout>
      <SEO title={title} />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box marginBottom={4}>
          <Stack direction="column" spacing={1}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              spacing={2}
            >
              <Typography
                variant="h4"
                sx={{ fontSize: { xs: 20, sm: 25, md: 30 } }}
              >
                {title}
              </Typography>
              <Stack
                spacing={1}
                direction={{ sm: "row", xs: "column" }}
                alignItems="flex-start"
              >
                {(type as string[]).map((x) => (
                  <Chip
                    label={projectTypeTranslation[x]}
                    component={Link}
                    to={`/${projectCategoryPrefix}${x}`}
                    clickable
                    color="secondary"
                    size={isSmall ? "small" : "medium"}
                  />
                ))}
              </Stack>
            </Stack>
            <Typography variant="body2">{year}</Typography>
          </Stack>
          <Box marginY={2}>
            <Divider />
          </Box>
        </Box>
        <article>
          {hasCarousel && (
            <ProjectCarousel
              images={carouselImages.map((x: any) => ({
                image: getImage(x.node),
              }))}
              renderOverlay={renderTextOverlay}
            />
          )}
          <SpecificationsTable
            sx={{ mt: hasCarousel ? 3 : 0 }}
            title="Technische Daten"
            specifications={specifications}
          />
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query (
    $id: String!
    $carouselDirectory: String!
    $specificationsFilename: String!
  ) {
    mdx(frontmatter: { id: { eq: $id } }) {
      body
      frontmatter {
        title
        type
        year
      }
    }
    site {
      siteMetadata {
        urls {
          projectCategoryPrefix
        }
      }
    }
    allFile(filter: { absolutePath: { regex: $carouselDirectory } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 1140
              aspectRatio: 1.777
            )
          }
        }
      }
    }
    file(absolutePath: { regex: $specificationsFilename }) {
      childPlainText {
        content
      }
    }
  }
`;
