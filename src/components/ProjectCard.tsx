import { Box, Card, CardActionArea, CardContent, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { DateTime } from 'luxon';
import React from 'react';

const useStyles = makeStyles(() => ({
   cardActions: {
      justifyContent: 'flex-end',
   },
   card: {
      background: 'transparent',
   },
   cardContent: {
      padding: 12,
   },
}));

type Props = {
   featuredImage: IGatsbyImageData;
   title: string;
   date: string;
   url: string;
   typeName: string;
   typeUrl: string;
   disableTags?: boolean;
   style?: React.CSSProperties;
};

export default ({ style, featuredImage, title, date, url, typeName, typeUrl, disableTags = false }: Props) => {
   const classes = useStyles();

   return (
      <Card style={style}>
         <CardActionArea component={Link} to={url}>
            <GatsbyImage image={featuredImage} alt={title} />
         </CardActionArea>
         <CardContent classes={{ root: classes.cardContent }}>
            <Typography gutterBottom variant="h6">
               {title}
            </Typography>
            <Typography variant="caption" color="textSecondary">
               {DateTime.fromISO(date).toLocaleString({ year: 'numeric' })}
            </Typography>
            {!disableTags && (
               <Box marginTop={1}>
                  <Chip label={typeName} clickable component={Link} to={typeUrl} color="secondary" size="small" />
               </Box>
            )}
         </CardContent>
      </Card>
   );
};
