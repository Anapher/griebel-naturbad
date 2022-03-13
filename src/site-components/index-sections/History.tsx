import React from "react";
import {
  useTheme,
  Typography,
  Button,
  Box,
  Paper,
  useMediaQuery,
} from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import to from "../../utils/to";
import { BoxProps } from "@mui/system";

const timeline = [
  {
    date: "seit 2013",
    desc: "Umzug in den Neubau mit Büro in Ahnatal-Weimar bei Kassel mit großem Schwimmteich Typ II",
  },
  {
    date: "seit 1998",
    desc: "Wiederaufnahme der selbständigen Tätigkeit als freier Landschaftsarchitekt im Büro für Freiraumplanung mit Sitz in Kassel und Eintragung als freier Landschaftsarchitekt in die Architektenliste der Architektenkammer Hessen",
  },
  {
    date: "1995",
    desc: "Eintragung als angestellter Landschaftsarchitekt in die Architektenliste der Architektenkammer Niedersachsen",
  },
  {
    date: "1992 - 1997",
    desc: "angestellt in einem Landschaftsplanungsbüro bei Göttingen als Landschaftsarchitekt im Bereich Objektplanung",
  },
  {
    date: "1991",
    desc: "Abschluss mit Diplomarbeit im Bereich Objektplanung und Diplomprüfung zum Dipl.-Ing. Landespflege",
  },
  {
    date: "seit 1988",
    desc: "selbständig als Grünplaner im eigenen Büro für Freiraumplanung in Höxter",
  },
  {
    date: "1985/86",
    desc: "Praktikum in einem Landschaftsarchitekturbüro in der Schweiz",
  },
  {
    date: "1984 - 1991",
    desc: "Studium an der Uni-GH-Paderborn Abteilung Höxter im Fachbereich Landespflege",
  },
];

export default function History(props: BoxProps) {
  return (
    <Box {...props}>
      <Typography variant="h5" align="center">
        Geschichte
      </Typography>
      <Box display="flex" flexDirection="row" width="100%">
        <Timeline
          position="left"
          sx={{ width: "100%" }}
          style={{ marginLeft: -100 }}
        >
          {timeline.map((x, i) => (
            <TimelineItem key={x.date}>
              <TimelineOppositeContent>
                <Box
                  paddingX={1}
                  paddingY={0.5}
                  marginBottom={3}
                  sx={{ width: { lg: 400, xs: 180, sm: 400 } }}
                >
                  <Typography style={{ wordWrap: "break-word" }}>
                    {x.desc}
                  </Typography>
                </Box>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  color="secondary"
                  style={{ width: 20, height: 20 }}
                  variant="outlined"
                ></TimelineDot>
                {i !== timeline.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography color="textSecondary">{x.date}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Button variant="outlined" {...to("/geschichte")}>
          Gesamte Geschichte anzeigen
        </Button>
      </Box>
    </Box>
  );
}
