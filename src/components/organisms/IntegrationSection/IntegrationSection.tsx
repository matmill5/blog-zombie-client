import { FC } from "react";
import { IntegrationSectionProps } from "./types";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

const IntegrationSectionContainer = styled.div`
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

const IntegrationSection: FC<IntegrationSectionProps> = ({ ...props }) => {
  return (
    <IntegrationSectionContainer>
      <Grid container direction="column">
        <Grid item xs={12}>
          <StyledTypography variant="h1">
            <StyledLink
              to={{ pathname: "https://www.github.com/matmill5" }}
              target="_blank"
            >
              Get started
            </StyledLink>{" "}
            in minutes and integrate with your favorite frontend framework.
          </StyledTypography>
        </Grid>
      </Grid>
    </IntegrationSectionContainer>
  );
};

IntegrationSection.defaultProps = {};

export default IntegrationSection;
