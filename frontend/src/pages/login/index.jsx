import React from "react";
import NavBar from "../../components/navbar";
import LoginContainer from "../../containers/loginContainer";

const Login = () => {
  return (
    <div>
      <NavBar center={true} />
      <LoginContainer />
    </div>
  );
};

export default Login;
