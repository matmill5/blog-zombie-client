import { FC } from "react";
import { HeroSectionProps } from "./types";
import { Grid, Typography } from "@material-ui/core";
import BlogZombieHandAvatarColored from "../../../assets/svg/zombie_hand_avatar_colored.svg";
import styled from "styled-components";

const HeroSectionContainer = styled.div`
  height: 100vh;
`;

const HeroImage = styled.img`
  width: 30vh;
  height: 30vh;
  animation: fadeIn 2s ease-in;
  animation-delay: 4s;
  animation-fill-mode: both;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px) rotate(10deg);
    }
    ,
    25% {
      opacity: 0.25;
    }
    ,
    50% {
      opacity: 0.5;
    }
    ,
    75% {
      opacity: 0.75;
    }
    ,
    100% {
      opacity: 1;
      transform: translateY(0px) rotate(0deg);
    }
  }
`;

const HeroSubtitleContainer = styled.div`
  animation: fadein 2s;
  animation-delay: 6s;
  animation-fill-mode: forwards;

  opacity: 0;

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const HeroTitleContainer = styled.div`
  margin-top: auto;
  margin-left: 15px;
`;

const HideTextEffectWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10vh;
  padding-bottom: 5vh;
  @media only screen and (max-width: 728px) {
    display: block;
  }
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  color: #f9d366 !important;
  display: inherit;
  visibility: visible;
  ${HideTextEffectWrapper}:hover & {
    display: inherit;
    visibility: visible;
  }

  animation: blinker 1.5s step-start;
  animation-iteration-count: 3;
  animation-delay: 1s;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

const HeroImageContainer = styled.div`
  @media only screen and (max-width: 728px) {
    display: flex;
    justify-content: center;
  }
`;

const HeroSection: FC<HeroSectionProps> = ({ ...props }) => {
  return (
    <HeroSectionContainer>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12}>
          <HideTextEffectWrapper>
            <HeroImageContainer>
              <HeroImage
                src={BlogZombieHandAvatarColored}
                alt={"Blog Zombie Logo"}
              />
            </HeroImageContainer>
            <HeroTitleContainer>
              <StyledTypography variant="h1">Blog Zombie</StyledTypography>
            </HeroTitleContainer>
          </HideTextEffectWrapper>
        </Grid>
        <Grid item xs={12}>
          <HeroSubtitleContainer>
            <Typography variant="h1" style={{ textAlign: "center" }}>
              Headless BMS that isn't scary.
            </Typography>
          </HeroSubtitleContainer>
        </Grid>
      </Grid>
    </HeroSectionContainer>
  );
};

HeroSection.defaultProps = {};

export default HeroSection;
