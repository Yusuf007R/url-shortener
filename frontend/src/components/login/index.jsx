import React from "react";
import { DivContainer } from "./style";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";

function Login(props) {
  return (
    <DivContainer>
      <LoginHeader />
      <LoginForm />
    </DivContainer>
  );
}

export default Login;
