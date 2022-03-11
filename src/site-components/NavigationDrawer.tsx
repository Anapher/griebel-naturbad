import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { SxProps } from "@mui/system";
import React from "react";
import {
  isNavigationLinkGroup,
  NavigationLink,
  NavigationLinkGroup,
} from "../types";
import to from "../utils/to";

const listItemPrimaryStyle: SxProps = {
  fontWeight: "bold",
  fontSize: 15,
  marginLeft: 1,
};

type NavButtonProps = {
  data: NavigationLinkGroup | NavigationLink;
};

function NavButton({ data }: NavButtonProps) {
  if (!isNavigationLinkGroup(data))
    return (
      <ListItem button {...to(data.to)}>
        <ListItemText
          primary={data.title}
          primaryTypographyProps={{ sx: listItemPrimaryStyle }}
        />
      </ListItem>
    );

  return (
    <>
      <ListItem>
        <ListItemText
          primary={data.title}
          primaryTypographyProps={{ sx: listItemPrimaryStyle }}
        />
      </ListItem>
      {data.children.map((link) => (
        <ListItem button {...to(link.to)} key={link.title}>
          <ListItemText
            primary={link.title}
            sx={{ ml: 3 }}
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItem>
      ))}
    </>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
  links: (NavigationLinkGroup | NavigationLink)[];
};

export default function NavigationDrawer({ open, onClose, links }: Props) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: 280 }}>
        {links.map((link) => (
          <NavButton key={link.title} data={link} />
        ))}
      </List>
    </Drawer>
  );
}
