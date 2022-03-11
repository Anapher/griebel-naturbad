import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

type Props = {
  url: string;
  image: IGatsbyImageData;
  title: string;
  year: string;
};

export default function ProjectCard({ url, image, title, year }: Props) {
  return (
    <Card>
      <CardActionArea component={Link} to={url}>
        <GatsbyImage image={image} alt={title} />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {year}
        </Typography>
      </CardContent>
    </Card>
  );
}
