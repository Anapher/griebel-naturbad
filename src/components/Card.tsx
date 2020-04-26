import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Chip,
  CardActionArea,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DateTime } from "luxon";
import BackgroundImage from "gatsby-background-image";

const useStyles = makeStyles(() => ({
  cardActions: {
    justifyContent: "flex-end",
  },
  card: {
    background: "transparent",
  },
  cardContent: {
    padding: 12,
  },
}));

type Props = {
  featuredImage: any;
  title: string;
  date: string;
  excerpt: string;
  url: string;
  typeName: string;
  typeUrl: string;
  disableTags?: boolean;
};

export default ({
  featuredImage,
  title,
  date,
  excerpt,
  url,
  typeName,
  typeUrl,
  disableTags = false,
}: Props) => {
  const classes = useStyles();

  return (
    <Card elevation={0} classes={{ root: classes.card }}>
      <CardActionArea component={Link} to={url}>
        <BackgroundImage
          style={{
            height: 0,
            paddingTop: "56.25%",
            objectFit: "cover",
            width: "100%",
          }}
          fluid={featuredImage?.childImageSharp.fluid}
        />
      </CardActionArea>
      <CardContent classes={{ root: classes.cardContent }}>
        <Typography
          gutterBottom
          variant="h6"
          style={{
            marginBottom: 0,
            fontWeight: 600,
            fontFamily:
              "Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
            lineHeight: 1.25,
          }}
        >
          {title}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {DateTime.fromISO(date).toLocaleString({ year: "numeric" })}
        </Typography>
        <Box marginY={1}>
          <Divider light />
        </Box>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          component="p"
          style={{
            fontFamily: "Merriweather, Georgia, serif",
            textOverflow: "ellipsis",
            maxHeight: "3.6em",
            lineHeight: "1.8em",
            wordWrap: "break-word",
            overflow: "hidden",
          }}
        >
          {excerpt}
        </Typography>
        {!disableTags && (
          <Box marginTop={1}>
            <Chip
              label={typeName}
              clickable
              component={Link}
              to={typeUrl}
              color="secondary"
              size="small"
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
