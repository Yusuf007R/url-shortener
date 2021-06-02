import React, { Fragment } from "react";
import NavBar from "../../components/navbar";
import HomeContainer from "../../containers/homeContainer";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <HomeContainer />
    </Fragment>
  );
};

export default Home;
