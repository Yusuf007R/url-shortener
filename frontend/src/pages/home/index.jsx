import React from "react";
import NavBar from "../../components/navbar";
import HomeContainer from "../../containers/homeContainer";

const Home = () => {
  return (
    <div>
      <NavBar right={true} center={true} />
      <HomeContainer />
    </div>
  );
};

export default Home;
