import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
  Grid,
  useTheme,
} from "@material-ui/core";
import { FaCheck } from "react-icons/fa";

const fields = [
  "Naturbadplanung",
  "Parkanlagen",
  "Grünzüge",
  "Siedlungsgrün",
  "Grünordnungsplanung",
  "Eingriffs- und Ausgleichsplanung",
  "Sport- und Spielanlagen",
  "Freizeitanlagen",
  "Kliniken/Außenanlagen",
  "Kindergärten",
  "Schulhöfe",
  "Friedhöfe",
  "Private Außenanlagen",
];

export default function FieldOfActivity() {
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <List dense style={{ margin: 0, padding: 0 }}>
          {fields.slice(0, Math.floor(fields.length / 2) + 1).map(x => (
            <ListItem key={x}>
              <ListItemIcon>
                <FaCheck color={theme.palette.secondary.main} size={16} />
              </ListItemIcon>
              <ListItemText primary={x} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={6}>
        <List dense style={{ margin: 0, padding: 0 }}>
          {fields
            .slice(Math.floor(fields.length / 2) + 1, fields.length)
            .map(x => (
              <ListItem key={x}>
                <ListItemIcon>
                  <FaCheck color={theme.palette.secondary.main} size={16} />
                </ListItemIcon>
                <ListItemText primary={x} />
              </ListItem>
            ))}
        </List>
      </Grid>
    </Grid>
  );
}
