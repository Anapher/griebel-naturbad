import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Slider, { Settings } from "react-slick";
import "../../style/react-slider.scss";

const useStyle = makeStyles(theme => ({
  main: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
    overflow: "hidden",
    maxWidth: 800,
  },
  text: {
    backgroundColor: "rgba(45, 52, 54, 0.5)",
    borderRadius: theme.shape.borderRadius,
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
}));

type CarouselImageProps = {
  children: React.ReactNode;
  description?: string;
};

type Props = {
  children: any;
};

export function CarouselImage({ children, description }: CarouselImageProps) {
  const classes = useStyle();

  // what a shit show
  const imageWrapper = React.Children.toArray(
    children.props.children.props.children
  ).find(x => typeof x !== "string").props.children[3];

  console.log(imageWrapper);

  const image = React.cloneElement(imageWrapper, {
    style: {
      width: "100%",
      marginBottom: 0,
      objectFit: "cover",
    },
  });

  return (
    <div
      style={{
        height: 0,
        paddingTop: "56.25%",
        position: "relative",
      }}
    >
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <div className="slick-image">{image}</div>
        {description && (
          <div className="slick-caption">
            <Typography variant="h6" className={classes.text}>
              {description}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Carousel({ children }: Props) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
}
