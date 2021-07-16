import React, { FC } from "react";
import { GetStartedPageProps } from "./types";
import { Grid } from "@material-ui/core";
import HeroSection from "../../organisms/HeroSection";
import AboutSection from "../../organisms/AboutSection";
import IntegrationSection from "../../organisms/IntegrationSection";
import OpenSourceSection from "../../organisms/OpenSourceSection";

// TODO: This is a placeholder for now
const GetStartedPage: FC<GetStartedPageProps> = ({ ...props }) => {
  return (
    <Grid container direction="column" spacing={0}>
      <Grid item xs={12}>
        <HeroSection />
      </Grid>
      <Grid item xs={12}>
        <AboutSection />
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

GetStartedPage.defaultProps = {};

export default GetStartedPage;
