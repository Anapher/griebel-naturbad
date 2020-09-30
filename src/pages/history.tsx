import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { container } from "../style/shared";

const timeline = [
  {
    date: "2016",
    desc: "Sanierung von Wasserspielplätzen, u. a. für die Stadt Koblenz",
  },
  {
    date: "seit 2013",
    desc:
      "Umzug in den Neubau mit Büro in Ahnatal-Weimar bei Kassel mit großem Schwimmteich Typ II",
  },
  {
    date: "2012",
    desc:
      "Entwicklung eines Aufbereitungsbereiches für hochbelastete Freibäder mit biologischer Wasseraufbereitung gem. FLL-Richtlinie 2011",
  },
  {
    date: "2012",
    desc:
      "Sanierung von Freibädern mit biologischer Wasseraufbereitung der „ersten Stunde“",
  },
  {
    date: "2009",
    desc:
      "Planung und Bau von Wasserspielplätzen/Sprühfeldern für die Stadt Frankfurt am Main mit technischer Aufbereitung",
  },
  {
    date: "2008",
    desc:
      "Bau und Eröffnung des ersten Komplettsystems für den öffentlichen Bereich",
  },
  {
    date: "2007",
    desc:
      "Entwicklung eines preiswerten Naturbades für den öffentlichen Bereich, z. B. für Vereine, Hotels, Campingplätze, Sauna- und Wellnessanlagen als Komplettsystem",
  },
  {
    date: "2007",
    desc:
      "Entwicklung eines Schwimmteich-Systems für private Schwimmteiche unter Anwendung des technischen Feuchtgebietes [FG] und Planung der ersten privaten Schwimmteiche",
  },
  {
    date: "2007",
    desc:
      "Gründung der Fa. Bio-Pool für die Entwicklung, Produktion und Vertrieb von Komplettsystemen für den öffentlichen und den privaten Kundenkreis",
  },
  {
    date: "2006",
    desc:
      "Entwicklung des Biobadefasses, erstmals vorgestellt der ABF Hannover im Januar 2007",
  },
  {
    date: "2004",
    desc:
      "Eröffnung des ersten öffentlichen Naturbades mit dem technischen Feuchtgebiet [FG]",
  },
  {
    date: "seit 2002",
    desc:
      "eigene öffentliche Naturbad-Projekte und Spezialisierung auf den Bereich Naturbadplanung",
  },
  {
    date: "2002",
    desc:
      "Entwicklung eines neuartigen Regenerationsbereiches für Naturbäder, das technische Feuchtgebiet [FG] unter Mitwirkung von Dr. Adam J. Onken, Kassel Biologe, Institut für angewandte Hydrologie, Kassel",
  },
  {
    date: "seit 1999",
    desc:
      "als Gründungsmitglied der Deutschen Gesellschaft für naturnahe Badegewässer e. V. Mitglied des Vorstandes",
  },
  {
    date: "seit 1998",
    desc:
      "Naturbadplanung selbstständig als Subplaner für andere Naturbadplaner (vorwiegend Ausführungsplanung, Bauleitung)",
  },
  {
    date: "1998",
    desc:
      "Wiederaufnahme der selbständigen Tätigkeit als freier Landschaftsarchitekt im Büro für Freiraumplanung mit Sitz in Kassel und Eintragung als freier Landschaftsarchitekt in die Architektenliste der Architektenkammer Hessen",
  },
  {
    date: "1995",
    desc:
      "Eintragung als angestellter Landschaftsarchitekt in die Architektenliste der Architektenkammer Niedersachsen",
  },
  {
    date: "seit 1994",
    desc: "Naturbadplanung als angestellter Landschaftsarchitekt",
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

const useStyles = makeStyles({
  container: { paddingTop: 32 },
});

export default function history() {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Geschichte" />
      <div className={classes.container}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Typography variant="h4">Geschichte</Typography>
        </Box>
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
    </Layout>
  );
}
