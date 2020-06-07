import React from "react";
import Topbar from "../Sections/Topbar";
import IntroSection from "../Sections/IntroSection";
import AboutMe from "../Sections/AboutMe";
import Projects from "../Sections/Projects";
import { Grid, AppBar, Button, Typography, Paper } from "@material-ui/core";
import { Parallax } from "react-spring/renderprops-addons";

const Home = () => {
  return (
    <Grid container direction="column">
      {/* <Parallax pages={9}> */}
      <Grid item xs={false} sm={3} />
      <Grid item container>
        <Grid item>
          <Topbar />
        </Grid>
        <Grid item>
          <IntroSection />
        </Grid>
        <Grid item>
          <AboutMe />
        </Grid>
        <Grid item>
          <Projects />
        </Grid>
        <Grid item>Notable Achievements</Grid>
        <Grid item>What else?</Grid>
        <Grid item>My thoughts / theories</Grid>
        <Grid item>Let's Connect</Grid>
      </Grid>
      <Grid item xs={false} sm={1} />
      {/* </Parallax> */}
    </Grid>
  );
};

export default Home;
