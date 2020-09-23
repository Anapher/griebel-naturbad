import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";
import { graphql } from "gatsby";
import React from "react";
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { container } from "../style/shared";

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
        contact: { address, emailAddress, fax, mapSrc, phone },
      },
    },
  },
}: any) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Kontakt" />
      <iframe
        src={mapSrc}
        frameBorder={0}
        allowFullScreen={false}
        tabIndex={0}
        style={{ border: 0, display: "block" }}
        width="100%"
        height={300}
      />
      <Box className={classes.container} marginY={8}>
        <InfoItem
          icon={<FaMapMarker color={theme.palette.secondary.main} size={24} />}
          primary="Büroadresse"
          secondary={formatNewLine(address)}
        />
        <Box mt={8}>
          <InfoItem
            icon={<FaPhone color={theme.palette.secondary.main} size={24} />}
            primary="Telefon"
            secondary={formatNewLine(phone)}
          />
        </Box>
        <Box mt={8}>
          <InfoItem
            icon={<FaEnvelope color={theme.palette.secondary.main} size={24} />}
            primary="E-Mail"
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
          mapSrc
          phone
        }
      }
    }
  }
`;
