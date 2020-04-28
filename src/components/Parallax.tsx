import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import BackgroundImage from "gatsby-background-image";
import { isDomAvailable } from "../utils/dom";

const useStyles = makeStyles({
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: 0,
    padding: 0,
    border: 0,
    display: "flex",
    alignItems: "center",
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "block",
      left: 0,
      top: 0,
      content: "''",
    },
  },
  small: {
    height: 380,
  },
});

type Props = {
  filter?: boolean;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  image: any;
  small?: boolean;
};

const getCurrentScrollTransform = () => {
  const y = window.innerWidth >= 768 ? window.pageYOffset / 3 : 0;
  return `translate3d(0,${y}px,0)`;
};

export default function Parallax({
  filter,
  className,
  children,
  style,
  image,
  small,
}: Props) {
  const classes = useStyles();
  const [transform, setTransform] = useState("translate3d(0,0,0)");

  useEffect(() => {
    if (!isDomAvailable()) return;

    const width = window.innerWidth;

    if (width >= 768) {
      window.addEventListener("scroll", resetTransform);
      return () => window.removeEventListener("scroll", resetTransform);
    }
  });

  const resetTransform = () => {
    setTransform(getCurrentScrollTransform());
  };

  // if (!isDomAvailable()) {
  //   return <BackgroundImage fluid={image}>{children}</BackgroundImage>;
  // }

  const parallaxClasses = classNames(classes.parallax, className, {
    [classes.filter]: filter,
    [classes.small]: small,
  });

  return (
    <BackgroundImage
      fluid={image}
      className={parallaxClasses}
      style={{
        ...style,
        transform: transform,
      }}
    >
      {children}
    </BackgroundImage>
  );
}
