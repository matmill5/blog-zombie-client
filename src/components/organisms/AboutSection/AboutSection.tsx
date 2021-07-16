import { FC } from "react";
import { AboutSectionProps } from "./types";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";

const AboutSectionContainer = styled.div`
  height: 100vh;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  padding-top: 20vh;
  @media (min-width: 700px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

const AboutSection: FC<AboutSectionProps> = ({ ...props }) => {
  return (
    <AboutSectionContainer>
      <Grid container direction="column">
        <Grid item xs={12}>
          <StyledTypography variant="h1">
            A lean Blog Management System for people that don't need a bloated
            CMS.
          </StyledTypography>
        </Grid>
      </Grid>
    </AboutSectionContainer>
  );
};

AboutSection.defaultProps = {};

export default AboutSection;
