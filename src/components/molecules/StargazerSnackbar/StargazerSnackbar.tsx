import React, { FC } from "react";
import { StargazerSnackbarProps } from "./types";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import BlogZombieGithubStars from "../../../assets/svg/blog-zombie-client-github-stars-shield.svg";

const StargazerShieldContainer = styled.div`
  display: inline;
  padding-left: 10px;
  :hover {
    opacity: 0.9;
  }
`;

const StargazerShield: FC = () => {
  return (
    <StargazerShieldContainer>
      <Link
        to={{
          pathname: "https://www.github.com/matmill5/blog-zombie-client",
        }}
        target="_blank"
      >
        <img
          src={
            "https://img.shields.io/github/stars/matmill5/blog-zombie-client?style=social"
          }
          onError={(e) => (e.currentTarget.src = BlogZombieGithubStars)}
          alt="github stargazer shield"
        />
      </Link>
    </StargazerShieldContainer>
  );
};

const StyledSnackbar = styled(Snackbar)`
  & .MuiSnackbarContent-root {
    background-color: #9866cb !important;
  }
`;

const StargazerSnackbar: FC<StargazerSnackbarProps> = ({ ...props }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <StyledSnackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={null}
        onClose={handleClose}
        message={
          <>
            <Typography variant="h4">
              We Need Your Support <StargazerShield></StargazerShield>
            </Typography>
            <Typography variant="body1">
              Please visit our repo and give it a star.
            </Typography>
          </>
        }
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
};

StargazerSnackbar.defaultProps = {};

export default StargazerSnackbar;
