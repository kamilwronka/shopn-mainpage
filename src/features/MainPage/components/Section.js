import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  test: "test",
  container: {
    padding: "72px 0 72px 0",
  },
}));

const Section = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" component="main" className={classes.container}>
      <Grid container className={classes.root} spacing={6}>
        <Grid
          item
          xs={6}
          justify="center"
          alignItems="center"
          style={{ display: "flex" }}
        >
          <div style={{ height: 400, width: 400, background: "#ccc" }}></div>
        </Grid>
        <Grid
          item
          xs={6}
          justify="center"
          direction="column"
          style={{ height: 400, display: "flex" }}
        >
          <div className={classes.shape}></div>
          <Typography
            component="h1"
            variant="h4"
            align="left"
            style={{ fontWeight: 600 }}
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography
            variant="h6"
            align="left"
            component="p"
            style={{ color: "#6919CF", marginBottom: 20 }}
          >
            Why does it affect you?
          </Typography>
          <Typography align="left" component="p" style={{ color: "#000" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section;
