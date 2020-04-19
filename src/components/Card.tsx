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
        <Img
          fluid={featuredImage.childImageSharp.fluid}
          style={{ borderRadius: 2 }}
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
          {DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)}
        </Typography>
        <Box marginY={1}>
          <Divider light />
        </Box>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          component="p"
          style={{ fontFamily: "Merriweather, Georgia, serif" }}
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
