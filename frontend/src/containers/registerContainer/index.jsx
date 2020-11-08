import { React, useState } from "react";
import { Separator } from "../../components/separator";
import {
  FormInput,
  StyledButton,
  Form,
  Title,
  Anchor,
} from "../../components/formElements";

import { registerRequest } from "../../services/authAPI";
import {
  ContainerText,
  FlexColumnContainer,
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
    <FlexColumnContainer>
      <ContainerText>
        <Title>Register and start sharing</Title>
        <span>Already have an account? </span>
        <StyledLink to="/login">
          <Anchor>Log in</Anchor>
        </StyledLink>
        <Separator></Separator>
      </ContainerText>
      <Form onSubmit={SubmitHandler}>
        <label>Username:</label>
        <FormInput
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
        ></FormInput>
        <label>Email Address:</label>
        <FormInput
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
        ></FormInput>
        <label>Password:</label>
        <FormInput
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        ></FormInput>
        <Anchor float="right" href="https://developer.mozilla.org">
          Forgot?
        </Anchor>
        <StyledButton>Register</StyledButton>
      </Form>
    </FlexColumnContainer>
  );
}

export default RegisterContainer;
