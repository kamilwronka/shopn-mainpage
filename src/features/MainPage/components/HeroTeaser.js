import React from "react";
import {
  Typography,
  Container,
  Grid,
  Input,
  TextField,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { ColorButton } from "../../../components/AppLayout/ColorButton";

const useStyles = makeStyles((theme) => ({
  test: {
    background: "red",
  },
  heroContent: {
    padding: theme.spacing(4, 3, 6),
  },
  heroHeader: {
    color: "#fff",
    fontWeight: "700",
  },
  heroSubheader: {
    color: "#cfabff",
    fontWeight: "400",
  },
  shape: {
    height: 15,
    width: 50,
    background: "#fff",
    marginBottom: 30,
  },
  shape2: {
    height: 15,
    width: 50,
    background: "#fff",
    marginTop: 30,
    right: 0,
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 40,
  },
  heroTeaserImage: {
    width: "100%",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      //   width: 400,
    },
  },
}));

const CustomTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#cfabff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#cfabff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#cfabff",
      },
      "&:hover fieldset": {
        borderColor: "#cfabff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#cfabff",
      },
    },
    background: "#fff",
    borderRadius: 4,
    marginRight: 16,
    maxWidth: 300,
  },
})(TextField);

const HeroTeaser = ({ children }) => {
  const classes = useStyles();

  return (
    <div style={{ minHeight: 600, background: "#6919CF", paddingTop: 70 }}>
      <Container maxWidth="lg" component="main" className={classes.heroContent}>
        <Grid container className={classes.root} spacing={6} wrap="wrap">
          <Grid item xs={12} md={6}>
            <div className={classes.shape}></div>
            <Typography
              component="h1"
              variant="h3"
              align="left"
              className={classes.heroHeader}
              gutterBottom
            >
              Create your online store in just few clicks
            </Typography>
            <Typography
              variant="h6"
              align="left"
              color="textSecondary"
              component="p"
              className={classes.heroSubheader}
            >
              Start developing your business - regardless of your industry
            </Typography>

            <div className={classes.inputContainer}>
              <CustomTextField
                id="outlined-basic"
                label=""
                variant="outlined"
                placeholder="Enter your email address"
                size="small"
              />
              <ColorButton size="medium">Try it free</ColorButton>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="/assets/images/hero_teaser.jpg"
              className={classes.heroTeaserImage}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroTeaser;
