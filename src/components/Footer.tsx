import {
  Box,
  Container,
  Typography,
  Divider,
  Link as MaterialLink,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import to from "../utils/to";

/** must be a fixed height to compute the min height of the content area */
export const FOOTER_HEIGHT_PX = 144;

const useStyles = makeStyles(theme => ({
  footer: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey[900],
    height: FOOTER_HEIGHT_PX,
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

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
    <Box component="footer" className={classes.footer}>
      <Container maxWidth="md">
        <Box padding={4} display="flex" justifyContent="center">
          {/* <FooterColumns columns={columns} /> */}
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
              style={{
                backgroundColor: "gray",
                marginLeft: 8,
                marginRight: 8,
              }}
            />
            <Typography
              {...to("/impressum")}
              variant="caption"
              className={classes.link}
            >
              Impressum
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
