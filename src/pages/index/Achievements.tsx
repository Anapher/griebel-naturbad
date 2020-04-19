import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { Grid, Typography, Box } from "@material-ui/core";

const LogoCard = ({ description, logo }) => (
  <Grid item xs={12} sm={6}>
    <Box
      textAlign="center"
      flexDirection="column"
      alignItems="center"
      display="flex"
    >
      <div style={{ width: 200, height: 80 }}>
        <Img fixed={logo} />
      </div>
      <Typography>{description}</Typography>
    </Box>
  </Grid>
);

// https://demos.creative-tim.com/material-kit-pro-react/#/sections
export default function Achievements() {
  const logos = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/(DGfnB|bdla)_logo.png/" } }) {
        edges {
          node {
            name
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Grid container spacing={6}>
      <LogoCard
        logo={
          logos.allFile.edges.find(x => x.node.name === "DGfnB_logo").node
            .childImageSharp.fixed
        }
        description={`Vorstandsmitglied der Deutschen Gesellschaft für naturnahe
                    Badegewässer e. V. seit 1999`}
      />
      <LogoCard
        logo={
          logos.allFile.edges.find(x => x.node.name === "bdla_logo").node
            .childImageSharp.fixed
        }
        description={`Mitglied im Bund Deutscher
        Landschaftsarchitekten `}
      />
    </Grid>
  );
}
