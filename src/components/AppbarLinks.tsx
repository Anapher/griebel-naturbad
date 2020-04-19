import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  Button,
  ButtonBase,
  Typography,
} from "@material-ui/core";
import { Link } from "gatsby";
import CustomButton from "./CustomButton";
import CustomDropdown from "./CustomDropdown";

const useStyles = makeStyles(theme => ({
  list: {
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
  },
  navLink: {
    minWidth: 96,
    padding: "0.9375rem",
    fontWeight: 400,
    fontSize: 13.5,
    textTransform: "uppercase",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)",
    },
  },
}));

type NavButtonProps = {
  nav: any;
};
function NavButton({ nav }: NavButtonProps) {
  const classes = useStyles();

  if (nav.url)
    return (
      <CustomButton
        className={classes.navLink}
        component={Link}
        to={nav.url}
        color="transparent"
      >
        {nav.title}
      </CustomButton>
    );

  return (
    <CustomDropdown
      buttonText={nav.title}
      buttonProps={{
        className: classes.navLink,
        color: "transparent",
      }}
      menuItemComponent={Link}
      menuItemProps={x => {
        console.log(x);

        return { to: x.url };
      }}
      items={nav.links}
      renderItem={x => <Typography>{x.title}</Typography>}
    />
  );
}

type AppBarLinksProps = {
  navigation: any;
};

const AppBarLinks = ({ navigation }: AppBarLinksProps) => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {navigation.map((link: any) => (
        <ListItem className={classes.listItem} key={link.title}>
          <NavButton nav={link} />
        </ListItem>
      ))}
    </List>
  );
};

export default AppBarLinks;
