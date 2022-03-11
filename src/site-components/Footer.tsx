import { Box, Container, Divider, styled, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import to from "../utils/to";

/** must be a fixed height to compute the min height of the content area */
export const FOOTER_HEIGHT_PX = 144;

const FooterContainer = styled("footer")(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[900],
  height: FOOTER_HEIGHT_PX,
}));

const SimpleLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export default function Footer() {
  const {
    site: {
      siteMetadata: {
        components: {
          footer: { copyright },
        },
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          components {
            footer {
              copyright
            }
          }
        }
      }
    }
  `);

  return (
    <FooterContainer>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", p: 4, justifyContent: "center" }}
      >
        <Box
          textAlign="center"
          marginTop={2}
          display="flex"
          alignItems="center"
        >
          <Typography variant="caption">
            &copy; {new Date().getFullYear()} {copyright}
          </Typography>
          <Divider
            orientation="vertical"
            light
            sx={{
              backgroundColor: "gray",
              mx: 1,
            }}
          />
          <SimpleLink {...to("/impressum")} variant="caption">
            Impressum
          </SimpleLink>
        </Box>
      </Container>
    </FooterContainer>
  );
}
