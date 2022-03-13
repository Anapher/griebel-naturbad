import { Container, ContainerProps, Grid, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

type LogoCardProps = {
  description: string;
  children?: React.ReactNode;
};

const LogoCard = ({ description, children }: LogoCardProps) => (
  <Grid
    item
    xs={12}
    sm={6}
    sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    {children}
    <Typography align="center">{description}</Typography>
  </Grid>
);

export default function Achievements(props: ContainerProps) {
  return (
    <Container maxWidth="lg" {...props}>
      <Grid container spacing={6}>
        <LogoCard
          description={`Vorstandsmitglied der Deutschen Gesellschaft für naturnahe Badegewässer e. V. seit 1999`}
        >
          <StaticImage
            src="../../../content/landing-page/achievements/DGfnB_logo.png"
            alt=""
            style={{ width: 200, height: 40, marginBottom: 24 }}
            objectFit="contain"
          />
        </LogoCard>
        <LogoCard
          description={`Mitglied im Bund Deutscher Landschaftsarchitekten`}
        >
          <StaticImage
            src="../../../content/landing-page/achievements/bdla_logo.png"
            alt=""
            style={{ width: 200, height: 40, marginBottom: 24 }}
            objectFit="contain"
          />
        </LogoCard>
      </Grid>
    </Container>
  );
}
