import React from "react";
import { Typography, Box } from "@material-ui/core";

type Props = {
  title: string;
  children?: React.ReactNode;
  dense?: boolean;
};
export default function Section({ title, children, dense }: Props) {
  return (
    <Box paddingY={6}>
      <Box marginBottom={dense ? 2 : 4}>
        <Typography variant="h4">{title}</Typography>
      </Box>
      {children}
    </Box>
  );
}
