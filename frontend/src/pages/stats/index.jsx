import { Fragment, React } from "react";
import NavBar from "../../components/navbar";
import StatsContainer from "../../containers/statsContainer";

const Stats = () => {
  return (
    <Fragment>
      <NavBar center={true} />
      <StatsContainer></StatsContainer>
    </Fragment>
  );
};

export default Stats;
