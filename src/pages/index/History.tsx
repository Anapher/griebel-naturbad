import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { useTheme, Typography } from "@material-ui/core";

export default function History() {
  const theme = useTheme();

  const timelineProps = {
    dateInnerStyle: {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  };
  return (
    <Timeline lineColor={"#ddd"}>
      <TimelineItem key="001" dateText="seit 1998" {...timelineProps}>
        <Typography variant="body1">
          seit 1998 Wiederaufnahme der selbständigen Tätigkeit als freier
          Landschaftsarchitekt im Büro für Freiraumplanung mit Sitz in Kassel
          und Eintragung als freier Landschaftsarchitekt in die Architektenliste
          der Architektenkammer Hessen
        </Typography>
      </TimelineItem>
      <TimelineItem key="002" dateText="1995" {...timelineProps}>
        <Typography variant="body1">
          Eintragung als angestellter Landschaftsarchitekt in die
          Architektenliste der Architektenkammer Niedersachsen
        </Typography>
      </TimelineItem>
      <TimelineItem key="003" dateText="1992 - 1997" {...timelineProps}>
        <Typography variant="body1">
          angestellt in einem Landschaftsplanungsbüro bei Göttingen als
          Landschaftsarchitekt im Bereich Objektplanung
        </Typography>
      </TimelineItem>
      <TimelineItem key="004" dateText="1991" {...timelineProps}>
        <Typography variant="body1">
          Abschluss mit Diplomarbeit im Bereich Objektplanung und Diplomprüfung
          zum Dipl.-Ing. Landespflege
        </Typography>
      </TimelineItem>
      <TimelineItem key="005" dateText="1985/86" {...timelineProps}>
        <Typography variant="body1">
          Praktikum in einem Landschaftsarchitekturbüro in der Schweiz
        </Typography>
      </TimelineItem>
      <TimelineItem key="006" dateText="seit 1988" {...timelineProps}>
        <Typography variant="body1">
          selbständig als Grünplaner im eigenen Büro für Freiraumplanung in
          Höxter
        </Typography>
      </TimelineItem>
      <TimelineItem key="007" dateText="1984 - 1991" {...timelineProps}>
        <Typography variant="body1">
          Studium an der Uni-GH-Paderborn Abteilung Höxter im Fachbereich
          Landespflege
        </Typography>
      </TimelineItem>
    </Timeline>
  );
}
