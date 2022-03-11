import { List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import {
  NavigationLink,
  NavigationLinkGroup,
  isNavigationLinkGroup,
} from "../types";
import to from "../utils/to";
import HeaderButton from "./HeaderButton";
import HeaderButtonDropDown from "./HeaderButtonDropDown";
import HeaderButtonDropDownItem from "./HeaderButtonDropDownItem";

const NavList = styled(List)(() => ({
  fontSize: 14,
  margin: 0,
  paddingLeft: 0,
  listStyle: "none",
  paddingTop: 0,
  paddingBottom: 0,
  display: "flex",
  flexDirection: "row",
}));

const NavListItem = styled(ListItem)(() => ({
  float: "left",
  margin: 0,
  padding: 0,
}));

type NavButtonProps = React.ComponentProps<typeof HeaderButton> & {
  data: NavigationLinkGroup | NavigationLink;
};

const NavButton = ({ data, ...props }: NavButtonProps) => {
  if (isNavigationLinkGroup(data)) {
    return (
      <HeaderButtonDropDown
        text={data.title}
        ariaPrefix={data.title}
        {...props}
      >
        {data.children.map(({ title, to: url }) => (
          <HeaderButtonDropDownItem {...to(url)}>
            <Typography>{title}</Typography>
          </HeaderButtonDropDownItem>
        ))}
      </HeaderButtonDropDown>
    );
  } else {
    return (
      <HeaderButton {...props} {...to(data.to)}>
        {data.title}
      </HeaderButton>
    );
  }
};

type Props = {
  links: (NavigationLinkGroup | NavigationLink)[];
};

export default function NavigationBarButtons({ links }: Props) {
  return (
    <NavList>
      {links.map((x, i) => (
        <NavListItem key={i}>
          <NavButton sx={{ marginLeft: 0.5, marginRight: 0.5 }} data={x} />
        </NavListItem>
      ))}
    </NavList>
  );
}
