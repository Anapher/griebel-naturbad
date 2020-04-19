import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  Button,
  ButtonBase,
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
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5",
      },
    },
  },
  navLink: {
    minWidth: 96,
    padding: "0.9375rem",
    fontWeight: 400,
    fontSize: "12px",
    textTransform: "uppercase",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
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
      dropdownList={nav.links?.map(x => (
        <Link style={{ textDecoration: "none", color: "inherit" }} to={x.url}>
          {x.title}
        </Link>
      ))}
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
        <ListItem className={classes.listItem} key={link.heading}>
          <NavButton nav={link} />
        </ListItem>
      ))}
    </List>
  );
};

export default AppBarLinks;
