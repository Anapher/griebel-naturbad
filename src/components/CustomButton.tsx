import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

// core components
import buttonStyle from "../style/material-kit-react/buttonStyle";

const makeComponentStyles = makeStyles(buttonStyle);

type Color =
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "transparent"
  | "white"
  | "rose"
  | "dark";

type Props = {
  color?: Color;
  size: "sm" | "lg" | undefined;
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  children?: any;
  className?: string;

  href?: string;
  target?: string;
  rel?: string;
} & Omit<Omit<React.ComponentProps<typeof Button>, "color">, "size">;

const CustomButton = React.forwardRef((props: Props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes = makeComponentStyles();

  const btnClasses = classNames(
    {
      [classes.button]: true,
      [classes.round]: round,
      [classes.fullWidth]: fullWidth,
      [classes.disabled]: disabled,
      [classes.simple]: simple,
      [classes.block]: block,
      [classes.link]: link,
      [classes.justIcon]: justIcon,
    },
    size && classes[size],
    color && classes[color],
    className
  );

  return (
    <Button {...rest} ref={ref as any} className={btnClasses}>
      {children}
    </Button>
  );
});

export default CustomButton;
