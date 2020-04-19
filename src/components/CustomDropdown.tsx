import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Popper from "@material-ui/core/Popper";

// core components
import Button from "./CustomButton";

import styles from "../style/material-kit-react/customDropdownStyle";

const useStyles = makeStyles(styles);

type Color =
  | "black"
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "rose";

type Props = {
  hoverColor?: Color;
  buttonText?: React.ReactNode;
  buttonIcon?: string | React.ComponentType;
  buttonProps?: any;
  dropup?: boolean;
  rtlActive?: boolean;
  caret?: boolean;
  left?: boolean;
  noLiPadding?: boolean;
  onClick?: () => void;

  items?: any[];
  renderItem: (item: any) => React.ReactNode;
  menuItemComponent?: any;
  menuItemProps?: (x: any) => any;
};

export default function CustomDropdown({
  buttonText,
  buttonIcon,
  items,
  buttonProps,
  dropup,
  caret = true,
  hoverColor = "primary",
  left,
  rtlActive,
  noLiPadding,
  onClick,
  menuItemComponent,
  menuItemProps,
  renderItem,
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | any>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (onClick !== undefined) onClick();
  };

  const handleCloseAway = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };

  const classes = useStyles();

  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive,
  });
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive,
  });

  let icon = null;

  switch (typeof buttonIcon) {
    case "object":
      icon = React.createElement(buttonIcon, { className: classes.buttonIcon });
      break;
    case "string":
      icon = <Icon className={classes.buttonIcon}>{buttonIcon}</Icon>;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <div>
      <div>
        <Button
          aria-label="Notifications"
          aria-owns={anchorEl ? "menu-list" : null}
          aria-haspopup="true"
          {...buttonProps}
          onClick={handleClick}
        >
          {icon}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b className={caretClasses} /> : null}
        </Button>
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={
          dropup
            ? left
              ? "top-start"
              : "top"
            : left
            ? "bottom-start"
            : "bottom"
        }
        className={classNames({
          [classes.popperClose]: !anchorEl,
          [classes.popperResponsive]: true,
        })}
      >
        {() => (
          <Grow
            in={Boolean(anchorEl)}
            style={
              dropup
                ? { transformOrigin: "0 100% 0" }
                : { transformOrigin: "0 0 0" }
            }
          >
            <Paper className={classes.dropdown}>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role="menu" className={classes.menuList}>
                  {items?.map((item, key) => {
                    return (
                      <MenuItem
                        component={menuItemComponent}
                        {...(menuItemProps && menuItemProps(item))}
                        key={key}
                        onClick={() => handleClose()}
                        className={dropdownItem}
                      >
                        {renderItem(item)}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
