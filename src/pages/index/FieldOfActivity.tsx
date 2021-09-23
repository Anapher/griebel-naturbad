import { Box, Button, Grid, ListItem, ListItemIcon, ListItemText, makeStyles, useTheme } from '@material-ui/core';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { fixedFullWidthGrid } from '../../utils/shared';
import to from '../../utils/to';

const useStyles = makeStyles({
   fixedFullWidthGrid,
});

const fields = [
   'Freibäder mit biologischer Wasseraufbereitung (Öffentliche Naturschwimmbäder)',
   'Private Schwimmteiche',
   'Wasserspielplätze/Sprühfelder',
   'Campingplätze',
   'Grünanlagen, Gärten',
   'Eingriffs- und Ausgleichsplanung',
   'Machbarkeitsstudien',
   'Parkanlagen',
   'Grünzüge',
   'Siedlungsgrün',
   'Grünordnungsplanung',
   'Sport- und Spielanlagen',
   'Freizeitanlagen',
   'Kliniken/Außenanlagen',
   'Kindergärten',
   'Schulhöfe',
   'Friedhöfe',
   'Private Außenanlagen',
];

export default function FieldOfActivity() {
   const theme = useTheme();
   const classes = useStyles();

   return (
      <div>
         <Grid container spacing={0} className={classes.fixedFullWidthGrid}>
            {fields.map((x) => (
               <Grid item key={x} xs={12} md={6} lg={4}>
                  <ListItem>
                     <ListItemIcon>
                        <FaCheck color={theme.palette.secondary.main} size={16} />
                     </ListItemIcon>
                     <ListItemText primary={x} />
                  </ListItem>
               </Grid>
            ))}
         </Grid>
         <Box marginTop={4}>
            <Grid container spacing={3}>
               <Grid item>
                  <Button variant="contained" color="secondary" {...to('/references')}>
                     Referenzen
                  </Button>
               </Grid>
               <Grid item>
                  <Button variant="contained" color="secondary" {...to('/projects/page/1')}>
                     Zu meinen Projekten
                  </Button>
               </Grid>
            </Grid>
         </Box>
      </div>
   );
}
