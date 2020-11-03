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

import { registerRequest } from "../../services/authAPI";

// import axios from "axios";

function RegisterContainer(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const SubmitHandler = async (event) => {
    event.preventDefault();
    console.log([username, password]);
    const result = await registerRequest({ username, password });

    console.log(result);
  };
  return (
    <DivContainer>
      <DivContainerHeader>
        <Title>Register and start sharing</Title>
        <span>Already have an account? </span>
        <Link to="/login">
          <Anchor>Log in</Anchor>
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
        <Anchor float="right" href="https://developer.mozilla.org">
          Forgot?
        </Anchor>
        <SubmitButton>Register</SubmitButton>
      </form>
    </DivContainer>
  );
}

export default RegisterContainer;
