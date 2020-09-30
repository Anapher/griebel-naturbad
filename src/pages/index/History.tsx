import React from "react";
import { useTheme, Typography, Button, Box, Paper } from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import to from "../../utils/to";

const timeline = [
  {
    date: "seit 2013",
    desc:
      "Umzug in den Neubau mit Büro in Ahnatal-Weimar bei Kassel mit großem Schwimmteich Typ II",
  },
  {
    date: "seit 1998",
    desc:
      "Wiederaufnahme der selbständigen Tätigkeit als freier Landschaftsarchitekt im Büro für Freiraumplanung mit Sitz in Kassel und Eintragung als freier Landschaftsarchitekt in die Architektenliste der Architektenkammer Hessen",
  },
  {
    date: "1995",
    desc:
      "Eintragung als angestellter Landschaftsarchitekt in die Architektenliste der Architektenkammer Niedersachsen",
  },
  {
    date: "1992 - 1997",
    desc:
      "angestellt in einem Landschaftsplanungsbüro bei Göttingen als Landschaftsarchitekt im Bereich Objektplanung",
  },
  {
    date: "1991",
    desc:
      "Abschluss mit Diplomarbeit im Bereich Objektplanung und Diplomprüfung zum Dipl.-Ing. Landespflege",
  },
  {
    date: "seit 1988",
    desc:
      "selbständig als Grünplaner im eigenen Büro für Freiraumplanung in Höxter",
  },
  {
    date: "1985/86",
    desc: "Praktikum in einem Landschaftsarchitekturbüro in der Schweiz",
  },
  {
    date: "1984 - 1991",
    desc:
      "Studium an der Uni-GH-Paderborn Abteilung Höxter im Fachbereich Landespflege",
  },
];

export default function History() {
  const theme = useTheme();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Timeline align="left">
          {timeline.map((x, i) => (
            <TimelineItem key={x.date}>
              <TimelineOppositeContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Typography color="textSecondary">{x.date}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  color="secondary"
                  style={{ width: 20, height: 20 }}
                  variant="outlined"
                ></TimelineDot>
                {i !== timeline.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent style={{ marginBottom: 16 }}>
                <Paper style={{ padding: "6px 16px" }}>
                  <Typography>{x.desc}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Button variant="outlined" {...to("/history")}>
          Gesamte Geschichte anzeigen
        </Button>
      </Box>
    </>
  );
}
