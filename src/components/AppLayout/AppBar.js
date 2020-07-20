import React from "react";
import {
  AppBar as MuiAppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  Link,
  Container,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { green, purple } from "@material-ui/core/colors";

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
    padding: 0,
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
    padding: theme.spacing(8, 0, 6),
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

  return (
    <>
      <CssBaseline />
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
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Pricing and plans
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
              className={classes.link}
            >
              Create your shop
            </ColorButton>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </>
  );
}

export default AppBar;
