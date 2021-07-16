import { FC, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import RootErrorBoundary from "./components/atoms/RootErrorBoundary";
import "./_index.scss";
import styled from "styled-components";
import { LinearProgress } from "@material-ui/core";
import GithubCorner from "react-github-corner";
import StargazerSnackbar from "./components/molecules/StargazerSnackbar";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer/Footer";

const HomePage = lazy(() => import("./components/pages/HomePage"));

const AppWrapper = styled.div`
  @media only screen and (min-width: 960px) {
    padding: 0px;
  }
`;

const StyledLinearProgress = styled(LinearProgress)`
  .MuiLinearProgress-barColorPrimary {
    background-color: #9866cb !important;
  }
`;

const App: FC = () => {
  return (
    <RootErrorBoundary>
      <Suspense fallback={<StyledLinearProgress />}>
        <AppWrapper>
          <Navbar />
          <GithubCorner
            href="https://github.com/matmill5/blog-zombie-client"
            target="_blank"
            bannerColor="#81DBBA"
            octoColor="#0D0D0D"
          ></GithubCorner>
          <StargazerSnackbar></StargazerSnackbar>
          <Switch>
            <Route exact path={"/"} component={HomePage} />
          </Switch>
          <Footer />
        </AppWrapper>
      </Suspense>
    </RootErrorBoundary>
  );
};

export default App;
