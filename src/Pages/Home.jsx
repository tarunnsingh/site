import React from "react";
import Topbar from "../Sections/Topbar";
import { Grid, AppBar, Button, Typography } from "@material-ui/core";

const Home = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Topbar />
      </Grid>
      <Grid item>Hi I am Tarun Section</Grid>
      <Grid item>About Me Section</Grid>
      <Grid item>Projects</Grid>
      <Grid item>Notable Achievements</Grid>
      <Grid item>What else?</Grid>
      <Grid item>My thoughts / theories</Grid>
      <Grid item>Let's Connect</Grid>
    </Grid>
  );
};

export default Home;
