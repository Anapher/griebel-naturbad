import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import to from "../utils/to";

const useStyles = makeStyles(theme => ({
  drawerContent: {
    width: 280,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  insetItem: {
    marginLeft: theme.spacing(3),
  },
  listPrimaryItem: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: theme.spacing(1),
  },
}));

type NavButtonProps = {
  nav: any;
};

function NavButton({ nav }: NavButtonProps) {
  const classes = useStyles();

  if (nav.url)
    return (
      <ListItem button {...to(nav.url)}>
        <ListItemText
          primary={nav.title}
          primaryTypographyProps={{ className: classes.listPrimaryItem }}
        />
      </ListItem>
    );

  return (
    <>
      <ListItem>
        <ListItemText
          primary={nav.title}
          primaryTypographyProps={{ className: classes.listPrimaryItem }}
        />
      </ListItem>
      {nav.links.map((link: any) => (
        <ListItem button {...to(link.url)} key={link.title}>
          <ListItemText
            primary={link.title}
            className={classes.insetItem}
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
};

export default function AppbarDrawer({ open, onClose }: Props) {
  const {
    site: {
      siteMetadata: {
        title,
        subtitle,
        components: {
          appbar: { navigation },
        },
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          components {
            appbar {
              navigation {
                links {
                  title
                  url
                }
                title
                url
              }
            }
          }
          title
          subtitle
        }
      }
    }
  `);

  const classes = useStyles();

  return (
    <Drawer open={open} onClose={onClose}>
      <div className={classes.drawerContent}>
        <List disablePadding>
          <ListItem button {...to("/")}>
            <ListItemText
              primary={title}
              secondary={subtitle}
              primaryTypographyProps={{ className: classes.bold }}
            />
          </ListItem>
          <Divider />
          {navigation.map((link: any) => (
            <NavButton key={link.title} nav={link} />
          ))}
        </List>
      </div>
    </Drawer>
  );
}
