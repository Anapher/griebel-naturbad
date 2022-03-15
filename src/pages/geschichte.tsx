import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../site-components/Layout";
import SEO from "../site-components/SEO";

const timeline = [
  {
    date: "2016",
    desc: "Sanierung von Wasserspielplätzen, u. a. für die Stadt Koblenz",
  },
  {
    date: "seit 2013",
    desc: "Umzug in den Neubau mit Büro in Ahnatal-Weimar bei Kassel mit großem Schwimmteich Typ II",
  },
  {
    date: "2012",
    desc: "Entwicklung eines Aufbereitungsbereiches für hochbelastete Freibäder mit biologischer Wasseraufbereitung gem. FLL-Richtlinie 2011",
  },
  {
    date: "2012",
    desc: "Sanierung von Freibädern mit biologischer Wasseraufbereitung der „ersten Stunde“",
  },
  {
    date: "2009",
    desc: "Planung und Bau von Wasserspielplätzen/Sprühfeldern für die Stadt Frankfurt am Main mit technischer Aufbereitung",
  },
  {
    date: "2008",
    desc: "Bau und Eröffnung des ersten Komplettsystems für den öffentlichen Bereich",
  },
  {
    date: "2007",
    desc: "Entwicklung eines preiswerten Naturbades für den öffentlichen Bereich, z. B. für Vereine, Hotels, Campingplätze, Sauna- und Wellnessanlagen als Komplettsystem",
  },
  {
    date: "2007",
    desc: "Entwicklung eines Schwimmteich-Systems für private Schwimmteiche unter Anwendung des technischen Feuchtgebietes [FG] und Planung der ersten privaten Schwimmteiche",
  },
  {
    date: "2007",
    desc: "Gründung der Fa. Bio-Pool für die Entwicklung, Produktion und Vertrieb von Komplettsystemen für den öffentlichen und den privaten Kundenkreis",
  },
  {
    date: "2006",
    desc: "Entwicklung des Biobadefasses, erstmals vorgestellt der ABF Hannover im Januar 2007",
  },
  {
    date: "2004",
    desc: "Eröffnung des ersten öffentlichen Naturbades mit dem technischen Feuchtgebiet [FG]",
  },
  {
    date: "seit 2002",
    desc: "eigene öffentliche Naturbad-Projekte und Spezialisierung auf den Bereich Naturbadplanung",
  },
  {
    date: "2002",
    desc: "Entwicklung eines neuartigen Regenerationsbereiches für Naturbäder, das technische Feuchtgebiet [FG] unter Mitwirkung von Dr. Adam J. Onken, Kassel Biologe, Institut für angewandte Hydrologie, Kassel",
  },
  {
    date: "seit 1999",
    desc: "als Gründungsmitglied der Deutschen Gesellschaft für naturnahe Badegewässer e. V. Mitglied des Vorstandes",
  },
  {
    date: "seit 1998",
    desc: "Naturbadplanung selbstständig als Subplaner für andere Naturbadplaner (vorwiegend Ausführungsplanung, Bauleitung)",
  },
  {
    date: "1998",
    desc: "Wiederaufnahme der selbständigen Tätigkeit als freier Landschaftsarchitekt im Büro für Freiraumplanung mit Sitz in Kassel und Eintragung als freier Landschaftsarchitekt in die Architektenliste der Architektenkammer Hessen",
  },
  {
    date: "1995",
    desc: "Eintragung als angestellter Landschaftsarchitekt in die Architektenliste der Architektenkammer Niedersachsen",
  },
  {
    date: "seit 1994",
    desc: "Naturbadplanung als angestellter Landschaftsarchitekt",
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

export default function geschichte() {
  return (
    <Layout>
      <SEO title="Geschichte" />
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ my: 4 }}>
          Geschichte
        </Typography>
        <Timeline position="left">
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
      </Container>
    </Layout>
  );
}
