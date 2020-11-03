import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  DivContainer,
  Title,
  Anchor,
  DivContainerHeader,
  SubmitButton,
  Separator,
} from "./style";
import FormInput from "../../components/formInput";

import { loginRequest } from "../../services/authAPI";

// import axios from "axios";

function LoginContainer(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const result = await loginRequest({ username, password });
    console.log(result);
  };
  return (
    <DivContainer>
      <DivContainerHeader>
        <Title>Log in and start sharing</Title>
        <span>Don't have an account? </span>
        <Link to="/register">
          <Anchor>Sign Up</Anchor>
        </Link>
        <Separator></Separator>
      </DivContainerHeader>
      <form onSubmit={SubmitHandler}>
        <label>Email Address or Username:</label>
        <br></br>
        <FormInput onChange={setUsername} type="text"></FormInput>
        <br></br>
        <label>Password:</label>
        <br></br>
        <FormInput onChange={setPassword} type="password"></FormInput>
        <br></br>
        <Anchor float="right">Forgot?</Anchor>
        <SubmitButton>Log in</SubmitButton>
      </form>
    </DivContainer>
  );
}

export default LoginContainer;
