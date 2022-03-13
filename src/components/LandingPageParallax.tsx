import { styled } from "@mui/material";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";

const RootContainer = styled(motion.div)({ height: "100vh" });

const ContentContainer = styled("div")({
  position: "relative",
  overflow: "hidden",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ImageContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: -6000,
});

type Props = {
  image: React.ReactNode;
  parallaxScroll?: number;
  children?: React.ReactNode;
};

export default function LandingPageParallax({ image, children }: Props) {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, 1 / 3], {
    clamp: false,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    if (element) setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <RootContainer
      ref={ref}
      style={{
        y,
      }}
    >
      <ContentContainer>
        <ImageContainer>{image}</ImageContainer>
        {children}
      </ContentContainer>
    </RootContainer>
  );
}
