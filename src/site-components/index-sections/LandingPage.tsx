import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import LandingPageParallax from "../../components/LandingPageParallax";
import LogoWhite from "../../assets/logo_white.svg";
import { isDomAvailable } from "../../utils/dom";
import { addWhitespaceAfterChars } from "../../utils/string-extensions";

const ContentContainer = styled(Container)({
  zIndex: 12,
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: -80,
});

const StyledLogo = styled(LogoWhite)(({ theme }) => ({
  width: 400,
  display: "block",
  marginLeft: -80,
  marginBottom: -25,
  [theme.breakpoints.down("md")]: {
    width: 180,
    marginLeft: -15,
    marginBottom: -45,
  },
}));

const SubtitleText = styled(Typography)(({ theme }) => ({
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
}));

export default function LandingPage() {
  const title = "Büro für Freiraumplanung";
  const subtitle = "dipl.-ing. Franz Griebel";
  let subtitleText = "Landschaftsarchitekt BDLA";

  if (isDomAvailable() && !CSS.supports("text-align-last", "justify")) {
    subtitleText = addWhitespaceAfterChars(subtitleText);
  }

  return (
    <LandingPageParallax
      image={
        <StaticImage
          src="../../../content/landing-page/landing_page_background.jpg"
          layout="fullWidth"
          alt=""
          objectFit="cover"
          style={{ width: "100%", height: "100%" }}
        />
      }
    >
      <ContentContainer maxWidth="lg">
        <div>
          <StyledLogo />
          <Typography
            variant="h2"
            sx={(theme) => ({
              fontSize: 50,
              fontWeight: 400,
              [theme.breakpoints.down("sm")]: {
                fontSize: 30,
              },
              [theme.breakpoints.down(380)]: {
                fontSize: 24,
              },
            })}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            sx={(theme) => ({
              fontSize: 30,
              [theme.breakpoints.down("sm")]: {
                fontSize: 22,
              },
              [theme.breakpoints.down(380)]: {
                fontSize: 20,
              },
            })}
          >
            {subtitle}
          </Typography>
          <SubtitleText variant="subtitle1">{subtitleText}</SubtitleText>
        </div>
      </ContentContainer>
    </LandingPageParallax>
  );
}
