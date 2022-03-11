import { Box, Container, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../site-components/Layout";
import SEO from "../site-components/SEO";
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";

const iconColor = "#f50057";

const GoogleMapsBanner = ({ mapSrc }: { mapSrc: string }) => {
  return (
    <iframe
      src={mapSrc}
      frameBorder={0}
      allowFullScreen={false}
      tabIndex={0}
      style={{ border: 0, display: "block" }}
      width="100%"
      height={300}
    />
  );
};

type InfoItemProps = {
  icon: React.ReactNode;
  primary: string;
  secondary: React.ReactNode;
};

const InfoItem = ({ icon, primary, secondary }: InfoItemProps) => {
  return (
    <Box display="flex" flexDirection="row">
      {icon}
      <Box ml={3}>
        <Typography variant="body1">{primary}</Typography>
        <Typography
          variant="body2"
          sx={(theme) => ({ color: theme.palette.grey[800], mt: 1 })}
        >
          {secondary}
        </Typography>
      </Box>
    </Box>
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

export default function kontakt() {
  const {
    site: {
      siteMetadata: {
        components: {
          contact: { address, emailAddress, mapSrc, phone },
        },
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          components {
            contact {
              address
              emailAddress
              mapSrc
              phone
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Kontakt" />
      <GoogleMapsBanner mapSrc={mapSrc} />
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <InfoItem
          icon={<FaMapMarker color={iconColor} size={24} />}
          primary="Büroadresse"
          secondary={formatNewLine(address)}
        />
        <Box mt={8}>
          <InfoItem
            icon={<FaPhone color={iconColor} size={24} />}
            primary="Telefon"
            secondary={formatNewLine(phone)}
          />
        </Box>
        <Box mt={8}>
          <InfoItem
            icon={<FaEnvelope color={iconColor} size={24} />}
            primary="E-Mail"
            secondary={
              <a href={`mailto:${emailAddress}`}>
                {formatNewLine(emailAddress)}
              </a>
            }
          />
        </Box>
      </Container>
    </Layout>
  );
}
