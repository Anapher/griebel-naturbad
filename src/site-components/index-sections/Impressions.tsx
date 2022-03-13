import { Container, ContainerProps, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import ProjectCarousel from "../../templates/project-template/ProjectCarousel";
import { parseKeyValueTextContent } from "../../utils/string-extensions";

export default function Impressions(props: ContainerProps) {
  const {
    allFile: { edges },
    file: {
      childPlainText: { content },
    },
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          relativePath: { regex: "landing-page/impressions/.*[^t][^x][^t]$/" }
        }
      ) {
        edges {
          node {
            name
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
      file(absolutePath: { regex: "landing-page/impressions/.*txt$/" }) {
        childPlainText {
          content
        }
      }
    }
  `);

  const captions = Object.fromEntries(parseKeyValueTextContent(content));

  return (
    <Container maxWidth="lg" {...props}>
      <Typography textAlign="center" variant="h5" gutterBottom>
        Impressionen
      </Typography>
      <ProjectCarousel
        images={edges.map(({ node: { name, childImageSharp } }: any) => ({
          image: getImage(childImageSharp),
          desc: captions[name],
        }))}
      />
    </Container>
  );
}
