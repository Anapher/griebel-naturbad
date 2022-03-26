import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { FaCheck } from "react-icons/fa";
import React from "react";
import to from "../../utils/to";
import { StaticImage } from "gatsby-plugin-image";
import StaticImageParallax from "../../components/StaticImageParallax";

const fields = [
  "Freibäder mit biologischer Wasseraufbereitung",
  "Private Schwimmteiche",
  "Wasserspielplätze/Sprühfelder",
  "Campingplätze",
  "Sicherheitsberatung an Natur(schwimm)bädern",
  "Machbarkeitsstudien",

  "Grünanlagen, Gärten",
  "Eingriffs- und Ausgleichsplanung",
  "Parkanlagen",
  "Grünzüge",
  "Siedlungsgrün",
  "Grünordnungsplanung",
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
    <StaticImageParallax
      image={
        <StaticImage
          src="../../../content/landing-page/background_field_of_activity.JPG"
          alt=""
          objectFit="cover"
          style={{ height: "100%", width: "100%" }}
          layout="fullWidth"
        />
      }
      parallaxScroll={400}
    >
      <Container maxWidth="lg" sx={{ py: 5, color: "white" }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ mb: 4 }}>
          Tätigkeitsfeld
        </Typography>
        <Grid container spacing={0}>
          {fields.map((x, i) => (
            <Grid item key={x} xs={12} md={6} lg={4}>
              <List disablePadding>
                <ListItem>
                  <ListItemIcon>
                    <FaCheck color={theme.palette.secondary.main} size={16} />
                  </ListItemIcon>
                  <ListItemText
                    primary={x}
                    primaryTypographyProps={{
                      fontWeight: i > 5 ? undefined : 600,
                    }}
                  />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>
        <Box marginTop={4}>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              color="secondary"
              {...to("/referenzen")}
            >
              Referenzen
            </Button>{" "}
            {/* <Button
              variant="contained"
              color="secondary"
              {...to("/projects/page/1")}
            >
              Zu meinen Projekten
            </Button> */}
          </Stack>
        </Box>
      </Container>
    </StaticImageParallax>
  );
}
