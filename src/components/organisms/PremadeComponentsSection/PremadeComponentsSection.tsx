import { FC } from "react";
import { PremadeComponentsSectionProps } from "./types";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PremadeComponentsSectionContainer = styled.div`
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

const PremadeComponentsSection: FC<PremadeComponentsSectionProps> = ({
  ...props
}) => {
  return (
    <PremadeComponentsSectionContainer>
      <Grid container direction="column">
        <Grid item xs={12}>
          <StyledTypography variant="h1">
            Premade, theme compatible,{" "}
            <StyledLink to="https://wwww.github.com/matmill5/blog-zombie-client">
              React components
            </StyledLink>{" "}
            for an amazing devex and unified-ux.
          </StyledTypography>
        </Grid>
      </Grid>
    </PremadeComponentsSectionContainer>
  );
};

PremadeComponentsSection.defaultProps = {};

export default PremadeComponentsSection;
