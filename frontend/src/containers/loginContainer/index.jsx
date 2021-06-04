import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  FormInput,
  StyledButton,
  Form,
  Title,
  Anchor,
  InputWrapper,
  LabelContainer,
  ErrorLabel,
} from "../../components/formElements";
import { loginRequest } from "../../services/authAPI";
import {
  ContainerText,
  FlexColumnContainer,
} from "../../components/globalContainers";
import { Separator } from "../../components/separator";
import { StyledLink } from "../../components/link";

function LoginContainer(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorLabel, setErrorLabel] = useState({});
  const history = useHistory();

  const SubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const result = await loginRequest({ username, password });
      if (result.ok) {
        history.push("/");
      }
    } catch (error) {
      if (error.code === 403) return setErrorLabel({ pass: "wrong password." });
      if (error.code === 409)
        return setErrorLabel({ user: "cannot find user" });
      console.log(error);
    }
  };
  return (
    <FlexColumnContainer>
      <ContainerText>
        <Title>Log in and start sharing</Title>
        <span>Don't have an account? </span>
        <StyledLink to="/register">
          <Anchor>Sign Up</Anchor>
        </StyledLink>
      </ContainerText>
      <Form onSubmit={SubmitHandler}>
        <Separator></Separator>
        <LabelContainer>
          <label>Email Address or Username:</label>
          <ErrorLabel>{errorLabel.user}</ErrorLabel>
        </LabelContainer>
        <InputWrapper>
          <FormInput
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
          ></FormInput>
        </InputWrapper>
        <LabelContainer>
          <label>Password:</label>
          <ErrorLabel>{errorLabel.pass}</ErrorLabel>
        </LabelContainer>
        <InputWrapper>
          <FormInput
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          ></FormInput>
          <Anchor float="right">Forgot?</Anchor>
        </InputWrapper>
        <StyledButton>Log in</StyledButton>
      </Form>
    </FlexColumnContainer>
  );
}

export default LoginContainer;
