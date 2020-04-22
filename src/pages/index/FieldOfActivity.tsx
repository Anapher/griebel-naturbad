import {
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@material-ui/core";
import React from "react";
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
    <Grid container spacing={0}>
      {fields.map(x => (
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
  );
}
