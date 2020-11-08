import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import {
  FormInput,
  StyledButton,
  Form,
  Title,
  Anchor,
} from "../../components/formElements";
import { loginRequest } from "../../services/authAPI";
import {
  ContainerText,
  FlexColumnContainer,
} from "../../components/globalContainers";
import { Separator } from "../../components/separator";

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
    <FlexColumnContainer>
      <ContainerText>
        <Title>Log in and start sharing</Title>
        <span>Don't have an account? </span>
        <Link to="/register">
          <Anchor>Sign Up</Anchor>
        </Link>
        <Separator width={"450px"}></Separator>
      </ContainerText>
      <Form onSubmit={SubmitHandler}>
        <label>Email Address or Username:</label>
        <FormInput
          onChange={(e) => {
            setUsername(e.target.value);
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
        <Anchor float="right">Forgot?</Anchor>
        <StyledButton>Log in</StyledButton>
      </Form>
    </FlexColumnContainer>
  );
}

export default LoginContainer;
