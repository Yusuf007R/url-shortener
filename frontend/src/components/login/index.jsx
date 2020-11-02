import { React, useState } from "react";
import {
  DivContainer,
  FormInput,
  Title,
  Anchor,
  DivContainerHeader,
  SubmitButton,
  Test,
  Test2,
} from "./style";

import axios from "axios";

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const SubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/auth/login", {
        username,
        password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <DivContainer>
      <DivContainerHeader>
        <Title>Log in and start sharing</Title>
        <span>Don't have an account?</span>{" "}
        <Anchor href="https://developer.mozilla.org">Sign Up</Anchor>
        <Test></Test>
      </DivContainerHeader>
      <form onSubmit={SubmitHandler}>
        <label>Email Address or Username:</label>
        <br></br>
        <FormInput
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
        ></FormInput>
        <br></br>
        <label>Password:</label>
        <br></br>
        <FormInput
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        ></FormInput>
        <br></br>
        <Test2 href="https://developer.mozilla.org">Forgot?</Test2>
        <SubmitButton>Log in</SubmitButton>
      </form>
    </DivContainer>
  );
}

export default Login;
