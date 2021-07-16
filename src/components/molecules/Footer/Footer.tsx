import { Typography } from "@material-ui/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { links } from "../../../globalConstants";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Footer: FC = () => {
  return (
    <Typography variant="body1" style={{ color: "white", textAlign: "center" }}>
      <StyledLink to={{ pathname: links.github_matthew }} target="_blank">
        🧑‍💻 Made with ❤️ in Brecksville, OH
      </StyledLink>
    </Typography>
  );
};

Footer.defaultProps = {};

export default Footer;
