import { makeStyles, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import LogoWhite from "../../assets/logo_white.svg";
import Parallax from "../../components/Parallax";
import { container } from "../../style/shared";
import { addWhitespaceAfterChars } from "../../utils/string-extensions";

const useStyles = makeStyles(theme => ({
  container: {
    ...container,
    zIndex: 12,
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: -80,
  },
  titleText: {
    fontSize: 50,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down(380)]: {
      fontSize: 24,
    },
  },
  subtitleText: {
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
    [theme.breakpoints.down(380)]: {
      fontSize: 20,
    },
  },
  logo: {
    width: 400,
    display: "block",
    marginLeft: -80,
    marginBottom: -25,
    [theme.breakpoints.down("sm")]: {
      width: 180,
      marginLeft: -15,
      marginBottom: -45,
    },
  },
  subtitleText2: {
    width: "100%",
    textAlign: "justify",
    textAlignLast: "justify",
    textJustify: "inter-character",
    fontSize: 25,
    marginTop: 12,
    height: "1.5em",
    lineHeight: "1.5em",

    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },

    "&::after": {
      content: '""',
      display: "inline-block",
      width: "100%",
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  const {
    background,
    site: {
      siteMetadata: { title, subtitle },
    },
  } = useStaticQuery(graphql`
    query {
      background: file(
        relativePath: { eq: "landing-page/background2_65.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `);

  let subtitleText = "Landschaftsarchitekt BDLA";

  if (!CSS.supports("text-align-last", "justify")) {
    subtitleText = addWhitespaceAfterChars(subtitleText);
  }

  return (
    <Parallax filter image={background.childImageSharp.fluid}>
      <div className={classes.container}>
        <div>
          <LogoWhite className={classes.logo} />
          <Typography variant="h2" className={classes.titleText}>
            {title}
          </Typography>
          <Typography variant="h4" className={classes.subtitleText}>
            {subtitle}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleText2}>
            {subtitleText}
          </Typography>
        </div>
      </div>
    </Parallax>
  );
}
