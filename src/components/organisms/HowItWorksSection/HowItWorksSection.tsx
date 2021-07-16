import { FC } from "react";
import { HowItWorksSectionProps } from "./types";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { links } from "../../../globalConstants";

const HowItWorksSectionContainer = styled.div`
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

const StyledLink = styled(Link)`
  color: rgba(255, 255, 255, 1);
  text-decoration-color: rgba(152, 102, 203, 1);
  :hover {
    text-decoration: dashed underline;
    text-decoration-color: rgba(152, 102, 203, 1);
  }
`;

const HowItWorksSection: FC<HowItWorksSectionProps> = ({ ...props }) => {
  return (
    <HowItWorksSectionContainer>
      <Grid container direction="column">
        <Grid item xs={12}>
          <StyledTypography variant="h1">
            Powered by a lightweight{" "}
            <StyledLink to={{ pathname: links.github }} target="_blank">
              nodejs microservice
            </StyledLink>
            , BlogZombie is fast and simple.
          </StyledTypography>
        </Grid>
      </Grid>
    </HowItWorksSectionContainer>
  );
};

HowItWorksSection.defaultProps = {};

export default HowItWorksSection;
