import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Carousel from '../../components/Carousel';
import { getImage } from 'gatsby-plugin-image';

const imageCaptions: { [name: string]: string } = {
   '1': 'Schimmbad an der Halbkugel',
   '2': 'Ein sehr schöner Garten',
   '3': 'Naturschimmbad Wohnheim',
   '4': 'Noch irgendein Schimmbad, kein Plan wo',
};

export default function Impressions() {
   const {
      allFile: { edges },
   } = useStaticQuery(graphql`
      {
         allFile(filter: { relativePath: { regex: "/landing-page/impressions/carousel/" } }) {
            edges {
               node {
                  name
                  childImageSharp {
                     gatsbyImageData(layout: CONSTRAINED, width: 1140, aspectRatio: 1.777)
                  }
               }
            }
         }
      }
   `);

   return (
      <Carousel
         images={edges.map((x: any) => ({
            data: getImage(x.node),
            description: imageCaptions[x.node.name],
         }))}
      />
   );
}
