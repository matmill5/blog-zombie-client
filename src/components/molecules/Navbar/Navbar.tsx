import React, { FC } from "react";
import { NavbarProps } from "./types";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import BlogZombieHandAvatarColored from "../../../assets/svg/zombie_hand_avatar_colored.svg";
import { useWindowScroll } from "react-use";

const StickyNavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  animation: 0.5s slidein ease-in-out;
  animation-fill-mode: forwards;

  transform: translateY(-100%);

  @keyframes slidein {
    to {
      transform: translateY(0);
    }
  }
`;

const StyledAvatar = styled.img`
  object-fit: contain;
  max-width: 60px;
`;

const StyledButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 300px;
  display: flex;
`;

const Navbar: FC<NavbarProps> = ({ ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { x, y } = useWindowScroll();

  return (
    <>
      {y > Math.round(window.innerHeight / 100) * 65 ? (
        <StickyNavbarContainer>
          <Grid container direction="row">
            <Grid item xs={12} style={{ padding: "10px" }}>
              <StyledButton onClick={() => window.scrollTo(0, 0)}>
                <StyledAvatar
                  src={BlogZombieHandAvatarColored}
                  alt="Blog Zombie Hand Avatar"
                ></StyledAvatar>
                <Typography
                  variant="h3"
                  style={{
                    textAlign: "left",
                    color: "#F9D366",
                    display: "inline",
                    paddingLeft: "15px",
                    marginBottom: "20px",
                  }}
                >
                  Blog Zombie
                </Typography>
              </StyledButton>
            </Grid>
          </Grid>
        </StickyNavbarContainer>
      ) : (
        <></>
      )}
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
