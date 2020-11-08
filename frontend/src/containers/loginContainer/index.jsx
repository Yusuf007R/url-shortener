import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Title, Anchor, Separator } from "./style";
import { FormInput } from "../../components/forminput";
import { StyledButton } from "../../components/button";
import { loginRequest } from "../../services/authAPI";
import {
  CenteredContainer,
  ContainerText,
} from "../../components/globalContainers";

// import axios from "axios";

function LoginContainer(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const result = await loginRequest({ username, password });
    console.log(result);
    if (result.ok) {
      history.push("/");
    }
  };
  return (
    <CenteredContainer margin={"110px"}>
      <ContainerText align={"center"}>
        <Title>Log in and start sharing</Title>
        <span>Don't have an account? </span>
        <Link to="/register">
          <Anchor>Sign Up</Anchor>
        </Link>
        <Separator></Separator>
      </ContainerText>
      <CenteredContainer margin={"0px"}>
        <form onSubmit={SubmitHandler}>
          <label>Email Address or Username:</label>
          <br></br>
          <FormInput
            width={"450px"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
          ></FormInput>
          <br></br>
          <label>Password:</label>
          <br></br>
          <FormInput
            width={"450px"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          ></FormInput>
          <br></br>
          <Anchor float="right">Forgot?</Anchor>
          <StyledButton width={"100%"}>Log in</StyledButton>
        </form>
      </CenteredContainer>
    </CenteredContainer>
  );
}

export default LoginContainer;
