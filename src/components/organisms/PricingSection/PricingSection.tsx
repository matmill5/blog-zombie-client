import { FC } from "react";
import { PricingSectionProps } from "./types";
import { Grid, Typography } from "@material-ui/core";
import BlogZombieHandAvatarColored from "../../../assets/svg/zombie_hand_avatar_colored.svg";
import styled from "styled-components";

const PricingSectionContainer = styled.div`
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

const PricingSection: FC<PricingSectionProps> = ({ ...props }) => {
  return (
    <PricingSectionContainer>
      <Grid container direction="column">
        <Grid item xs={12}>
          <StyledTypography variant="h1">
            BlogZombie is a lean Blog Management System for people that don't
            need a bloated CMS.
          </StyledTypography>
        </Grid>
      </Grid>
    </PricingSectionContainer>
  );
};

PricingSection.defaultProps = {};

export default PricingSection;
