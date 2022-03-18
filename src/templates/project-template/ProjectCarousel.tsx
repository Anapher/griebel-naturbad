import { alpha, styled, Typography } from "@mui/material";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import Carousel from "react-material-ui-carousel";

const StyledCarousel = styled(Carousel)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

const ImageDescriptionContainer = styled("div")({
  position: "absolute",
  top: 0,
  bottom: "10%",
  left: 0,
  right: 0,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
});

const ImageDescription = styled("div")(({ theme }) => ({
  backgroundColor: alpha(theme.palette.grey[800], 0.7),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
}));

const ImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down("lg")]: {
    height: 400,
  },
  [theme.breakpoints.down("md")]: {
    height: 400,
  },
  [theme.breakpoints.down("sm")]: {
    height: 250,
  },
}));

export function renderTextOverlay({ desc }: CarouselImage) {
  return (
    <ImageDescriptionContainer>
      {desc && (
        <ImageDescription>
          <Typography>{desc}</Typography>
        </ImageDescription>
      )}
    </ImageDescriptionContainer>
  );
}

export type CarouselImage = {
  image: IGatsbyImageData;
  desc?: string;
};

type Props<T extends CarouselImage> = {
  images: T[];
  renderOverlay?: (element: T) => React.ReactNode | null | undefined;
};

export default function ProjectCarousel<T extends CarouselImage>({
  images,
  renderOverlay,
}: Props<T>) {
  return (
    <StyledCarousel
      autoPlay
      swipe
      animation="slide"
      indicators={false}
      duration={300}
    >
      {images.map((element, i) => (
        <ImageContainer key={i}>
          <GatsbyImage
            image={element.image}
            alt={element.desc || ""}
            style={{ width: "100%", height: "100%", borderRadius: 8 }}
          />
          {renderOverlay?.(element)}
        </ImageContainer>
      ))}
    </StyledCarousel>
  );
}
