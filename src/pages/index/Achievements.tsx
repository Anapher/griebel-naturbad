import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Grid, Typography, Box, makeStyles } from '@material-ui/core';
import { fixedFullWidthGrid } from '../../utils/shared';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

const useStyles = makeStyles({
   fixedFullWidthGrid,
});

type LogoCardProps = {
   description: string;
   logo: IGatsbyImageData;
   imgStyle?: React.CSSProperties;
};

const LogoCard = ({ description, logo, imgStyle }: LogoCardProps) => (
   <Grid item xs={12} sm={6}>
      <Box textAlign="center" flexDirection="column" alignItems="center" display="flex">
         <GatsbyImage
            image={logo}
            alt={description}
            style={{ width: 200, height: 40, marginBottom: 24, ...imgStyle }}
            objectFit="contain"
         />
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
                     gatsbyImageData(layout: CONSTRAINED, width: 200)
                  }
               }
            }
         }
      }
   `);

   const classes = useStyles();

   return (
      <Grid container spacing={6} className={classes.fixedFullWidthGrid}>
         <LogoCard
            logo={getImage(logos.allFile.edges.find((x: any) => x.node.name === 'DGfnB_logo').node)!}
            description={`Vorstandsmitglied der Deutschen Gesellschaft für naturnahe
                    Badegewässer e. V. seit 1999`}
         />
         <LogoCard
            logo={getImage(logos.allFile.edges.find((x: any) => x.node.name === 'bdla_logo').node)!}
            description={`Mitglied im Bund Deutscher
        Landschaftsarchitekten `}
         />
      </Grid>
   );
}
