import { FC } from "react";
import { OpenSourceSectionProps } from "./types";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { links } from "../../../globalConstants";

const OpenSourceSectionContainer = styled.div`
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

const OpenSourceSection: FC<OpenSourceSectionProps> = ({ ...props }) => {
  return (
    <OpenSourceSectionContainer>
      <Grid container direction="column">
        <Grid item xs={12}>
          <StyledTypography variant="h1">
            Select one of our{" "}
            <StyledLink to={links.github}>managed plans</StyledLink> or{" "}
            <StyledLink to={links.github}>self-host</StyledLink>. It's
            opensource and free to use.
          </StyledTypography>
        </Grid>
      </Grid>
    </OpenSourceSectionContainer>
  );
};

OpenSourceSection.defaultProps = {};

export default OpenSourceSection;
