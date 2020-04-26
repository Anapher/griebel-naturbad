import { CSSProperties } from "react";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";

const containerFluid: CSSProperties = {
  paddingRight: 15,
  paddingLeft: 15,
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
};

const container: CreateCSSProperties<{}> = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: 540,
  },
  "@media (min-width: 768px)": {
    maxWidth: 720,
  },
  "@media (min-width: 992px)": {
    maxWidth: 960,
  },
  "@media (min-width: 1200px)": {
    maxWidth: 1140,
  },
};

export { containerFluid, container };
