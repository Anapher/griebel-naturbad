import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import { container } from "../style/shared";

const useStyles = makeStyles({
  sectionContainer: {
    ...container,
    zIndex: 12,
    color: "#000",
  },
});

type Props = {
  title?: string;
  children?: React.ReactNode;
  dense?: boolean;
} & React.ComponentProps<typeof Box>;

export default function Section({
  title,
  children,
  dense,
  ...boxProps
}: Props) {
  const classes = useStyles();
  return (
    <Box className={classes.sectionContainer} paddingY={6} {...boxProps}>
      {title && (
        <Box marginBottom={dense ? 2 : 4}>
          <Typography variant="h4" align={"center"}>
            {title}
          </Typography>
        </Box>
      )}
      {children}
    </Box>
  );
}
