import {
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import HeaderButton from "./HeaderButton";

const Caret = styled("b")({
  transition: "all 150ms ease-in",
  display: "inline-block",
  width: 0,
  height: 0,
  marginLeft: 8,
  verticalAlign: "middle",
  borderTop: "4px solid",
  borderRight: "4px solid transparent",
  borderLeft: "4px solid transparent",
});

const PaperDropDown = styled(Paper)({
  borderRadius: 3,
  border: 0,
  boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
  top: "100%",
  zIndex: 1000,
  minWidth: 160,
  padding: "5px 0",
  margin: "2px 0 0",
  fontSize: 14,
  textAlign: "left",
  listStyle: "none",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
});

type Props = React.ComponentProps<typeof HeaderButton> & {
  text: string;
  children?: React.ReactNode;
  ariaPrefix: string;
};

export default function HeaderButtonDropDown({
  text,
  children,
  ariaPrefix,
  ...props
}: Props) {
  const [anchorEl, setAnchorEl] = useState<null | any>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleCloseAway = (event: React.MouseEvent | React.TouchEvent) => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };

  const menuId = ariaPrefix + "-menu";

  return (
    <>
      <HeaderButton
        {...props}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={handleClick}
      >
        {text}
        <Caret sx={{ transform: isMenuOpen ? "rotate(180deg)" : undefined }} />
      </HeaderButton>
      <Popper
        open={isMenuOpen}
        anchorEl={anchorEl}
        placement="bottom"
        style={{ zIndex: 50000 }}
      >
        {() => (
          <Grow in={isMenuOpen} style={{ transformOrigin: "0 0 0" }}>
            <PaperDropDown>
              <ClickAwayListener onClickAway={handleCloseAway as any}>
                <MenuList role="menu" sx={{ padding: 0 }} id={menuId}>
                  {children}
                </MenuList>
              </ClickAwayListener>
            </PaperDropDown>
          </Grow>
        )}
      </Popper>
    </>
  );
}
