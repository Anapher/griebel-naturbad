import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";
import { styled } from "@mui/material";

const Root = styled("div")({
  position: "relative",
  overflow: "hidden",
});

const ImageContainer = styled(motion.div)({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: -6000,
});

type Props = React.HTMLAttributes<HTMLDivElement> & {
  image: React.ReactNode;
  parallaxScroll?: number;
};

export default function StaticImageParallax({
  image,
  children,
  className,
  parallaxScroll = 200,
  ...props
}: Props) {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useViewportScroll();

  const y = useTransform(
    scrollY,
    [elementTop, elementTop + 1000],
    [0, -parallaxScroll],
    {}
  );

  useLayoutEffect(() => {
    const element = ref.current;
    if (element) setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <Root ref={ref} {...props}>
      <ImageContainer
        style={{
          y,
          height: `calc(100% + ${parallaxScroll}px)`,
        }}
      >
        {image}
      </ImageContainer>
      {children}
    </Root>
  );
}
