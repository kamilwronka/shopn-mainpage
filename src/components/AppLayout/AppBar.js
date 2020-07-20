import React, { useState } from "react";
import {
  AppBar as MuiAppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  Link,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  Drawer,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { green, purple } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    backgroundColor: "#6919CF",
    margin: 0,
    padding: 0,
  },
  appBarContainer: {
    // margin: 0,
    padding: theme.spacing(3, 3, 0),
  },
  toolbar: {
    flexWrap: "wrap",
    padding: 0,
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 0, 1, 3),
    color: "#fff",
    textDecoration: "none",
  },
  logo: {
    textDecoration: "none",
    color: "#fff",
  },
  heroContent: {
    padding: theme.spacing(6, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  buttonLink: {
    backgroundColor: "#00B271",
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    color: "#fff",
  },
  desktopNav: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

function AppBar() {
  const classes = useStyles();
  const [drawerOpen, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer((prevState) => !prevState);
  };

  return (
    <>
      <CssBaseline />
      <Drawer open={drawerOpen} anchor="right" onClose={toggleDrawer}>
        <List>
          <ListItem>Log In</ListItem>
          <ListItem>Try it free</ListItem>
        </List>
      </Drawer>
      <MuiAppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Container maxWidth="lg" className={classes.appBarContainer}>
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              <Link
                href="/"
                color="inherit"
                className={classes.logo}
                underline="none"
              >
                shopn.io
              </Link>
            </Typography>
            <nav className={classes.desktopNav}>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Pricing
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Learn
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="https://app.shopn.io/auth/signin"
                className={classes.link}
              >
                Log In
              </Link>
            </nav>
            <ColorButton
              href="https://app.shopn.io/create"
              color="primary"
              variant="contained"
              className={[classes.link, classes.desktopNav]}
            >
              Create your shop
            </ColorButton>
            <IconButton
              aria-label="Open drawer"
              edge="start"
              onClick={toggleDrawer}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </>
  );
}

export default AppBar;
