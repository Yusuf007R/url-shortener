import { React, useState } from "react";
import { Title, Anchor, Separator } from "./style";
import { FormInput } from "../../components/forminput";
import { StyledButton } from "../../components/button";

import { registerRequest } from "../../services/authAPI";
import {
  CenteredContainer,
  ContainerText,
} from "../../components/globalContainers";
import { StyledLink } from "../../components/link";

function RegisterContainer(props) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const result = await registerRequest({ username, password, email });

    console.log(result);
  };
  return (
    <CenteredContainer margin={"110px"}>
      <ContainerText align={"center"}>
        <Title>Register and start sharing</Title>
        <span>Already have an account? </span>
        <StyledLink to="/login">
          <Anchor>Log in</Anchor>
        </StyledLink>
        <Separator></Separator>
      </ContainerText>
      <CenteredContainer margin={"0px"}>
        <form onSubmit={SubmitHandler}>
          <label>Username:</label>
          <br></br>
          <FormInput
            width={"450px"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
          ></FormInput>
          <br></br>
          <label>Email Address:</label>
          <br></br>
          <FormInput
            width={"450px"}
            onChange={(e) => {
              setEmail(e.target.value);
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
          <Anchor float="right" href="https://developer.mozilla.org">
            Forgot?
          </Anchor>
          <StyledButton width={"100%"}>Register</StyledButton>
        </form>
      </CenteredContainer>
    </CenteredContainer>
  );
}

export default RegisterContainer;
