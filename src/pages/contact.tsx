import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";
import { graphql } from "gatsby";
import React from "react";
import { FaEnvelope, FaFax, FaMapMarker, FaPhone } from "react-icons/fa";
import { Map as LeafletMap, Marker, TileLayer } from "react-leaflet";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { container } from "../style/shared";
import { isDomAvailable } from "../utils/dom";

const useStyles = makeStyles({
  container: container,
});

type InfoItemProps = {
  icon: React.ReactNode;
  primary: string;
  secondary: React.ReactNode;
};

const InfoItem = ({ icon, primary, secondary }: InfoItemProps) => {
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="row">
      {icon}
      <Box ml={3}>
        <Typography variant="body1">{primary}</Typography>
        <Typography
          variant="body2"
          style={{ color: theme.palette.grey[800], marginTop: 8 }}
        >
          {secondary}
        </Typography>
      </Box>
    </Box>
  );
};

const Map = ({ position }: any) => {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <LeafletMap center={position} zoom={8} style={{ height: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} />
    </LeafletMap>
  );
};

const formatNewLine = (s: string) => {
  const exploded = s.split("\n");
  return exploded.map((item, i) => (
    <span key={i}>
      {item}
      {i !== exploded.length - 1 && <br />}
    </span>
  ));
};

function contact({
  data: {
    site: {
      siteMetadata: {
        contact: { address, emailAddress, fax, location, phone },
      },
    },
  },
}: any) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Kontakt" />
      <div style={{ width: "100%", height: 300 }}>
        <Map position={location} />
      </div>
      <Box className={classes.container} marginY={8}>
        <InfoItem
          icon={<FaMapMarker color={theme.palette.secondary.main} size={24} />}
          primary="Mein Büro"
          secondary={formatNewLine(address)}
        />
        <Box mt={8}>
          <InfoItem
            icon={<FaPhone color={theme.palette.secondary.main} size={24} />}
            primary="Ruf mich an"
            secondary={formatNewLine(phone)}
          />
        </Box>
        <Box mt={8}>
          <InfoItem
            icon={<FaFax color={theme.palette.secondary.main} size={24} />}
            primary="Schick mir ein Fax"
            secondary={formatNewLine(fax)}
          />
        </Box>
        <Box mt={8}>
          <InfoItem
            icon={<FaEnvelope color={theme.palette.secondary.main} size={24} />}
            primary="Send mir eine E-Mail"
            secondary={
              <a href={`mailto:${emailAddress}`}>
                {formatNewLine(emailAddress)}
              </a>
            }
          />
        </Box>
      </Box>
    </Layout>
  );
}

export default contact;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        contact {
          address
          emailAddress
          fax
          location
          phone
        }
      }
    }
  }
`;
