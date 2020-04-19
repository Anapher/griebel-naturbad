import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Carousel from "../../components/Carousel";

const imageCaptions: { [name: string]: string } = {
  "1": "Schimmbad an der Halbkugel",
  "2": "Ein sehr schöner Garten",
  "3": "Naturschimmbad Wohnheim",
  "4": "Noch irgendein Schimmbad, kein Plan wo",
};

export default function Impressions() {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          relativePath: { regex: "/landing-page/impressions/carousel/" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(quality: 90, maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Carousel
      images={edges.map(x => ({
        fluid: x.node.childImageSharp.fluid,
        description: imageCaptions[x.node.name],
      }))}
    />
  );
}
