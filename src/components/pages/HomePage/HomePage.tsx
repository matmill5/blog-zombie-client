import React, { FC } from "react";
import { HomePageProps } from "./types";
import { Grid } from "@material-ui/core";
import HeroSection from "../../organisms/HeroSection";
import AboutSection from "../../organisms/AboutSection";
import IntegrationSection from "../../organisms/IntegrationSection";
import OpenSourceSection from "../../organisms/OpenSourceSection";
import HowItWorksSection from "../../organisms/HowItWorksSection";
import PremadeComponentsSection from "../../organisms/PremadeComponentsSection";

const HomePage: FC<HomePageProps> = ({ ...props }) => {
  return (
    <Grid container direction="column" spacing={0}>
      <Grid item xs={12}>
        <HeroSection />
      </Grid>
      <Grid item xs={12}>
        <AboutSection />
      </Grid>
      <Grid item xs={12}>
        <HowItWorksSection />
      </Grid>
      <Grid item xs={12}>
        <PremadeComponentsSection />
      </Grid>
      <Grid item xs={12}>
        <OpenSourceSection />
      </Grid>
      <Grid item xs={12}>
        <IntegrationSection />
      </Grid>
    </Grid>
  );
};

HomePage.defaultProps = {};

export default HomePage;
