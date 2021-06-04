import { React, useState } from "react";
import { useHistory } from "react-router-dom";

import { Separator } from "../../components/separator";
import {
  FormInput,
  StyledButton,
  Form,
  Title,
  Anchor,
  PasswordStrengtWrapper,
  InputWrapper,
  ErrorLabel,
  LabelContainer,
} from "../../components/formElements";

import { registerRequest } from "../../services/authAPI";
import {
  ContainerText,
  FlexColumnContainer,
} from "../../components/globalContainers";
import { StyledLink } from "../../components/link";

function RegisterContainer(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrenght, setPasswordStrenght] = useState({});
  const [errorLabel, setErrorLabel] = useState({});
  const history = useHistory();

  const passwordVerify = (passwordToVerify) => {
    const hasNumber = new RegExp(/[0-9]/).test(passwordToVerify);
    const hasLetter = new RegExp(/[a-zA-Z]/).test(passwordToVerify);
    const length = passwordToVerify.length >= 8 ? true : false;

    return setPasswordStrenght({
      hasNumber,
      hasLetter,
      length,
      all: hasNumber && hasLetter && length,
    });
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();
    if (!passwordStrenght.all) {
      return setErrorLabel({ pass: "Low security password" });
    }
    try {
      const result = await registerRequest({ username, password, email });
      console.log(result);
      if (result.ok) {
        history.push("/");
      }
    } catch (error) {
      if (error.code === 409) {
        if (error.msg.emailTaken)
          return setErrorLabel({ email: "email already registered" });
        if (error.msg.usernameTaken)
          return setErrorLabel({ user: "username already taken" });
      }
      console.log(error);
    }
  };

  return (
    <FlexColumnContainer>
      <ContainerText>
        <Title>Register and start sharing</Title>
        <span>Already have an account? </span>
        <StyledLink to="/login">
          <Anchor>Log in</Anchor>
        </StyledLink>
      </ContainerText>
      <Form onSubmit={SubmitHandler}>
        <Separator></Separator>
        <LabelContainer>
          <label> Username:</label>
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
          <label>Email Address: </label>
          <ErrorLabel>{errorLabel.email}</ErrorLabel>
        </LabelContainer>
        <InputWrapper>
          <FormInput
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></FormInput>
        </InputWrapper>
        <LabelContainer>
          <label>Password: </label>
          <ErrorLabel>{errorLabel.pass}</ErrorLabel>
        </LabelContainer>
        <InputWrapper>
          <FormInput
            onChange={(e) => {
              passwordVerify(e.target.value);
              setPassword(e.target.value);
            }}
            type="password"
          ></FormInput>
          <PasswordStrengtWrapper>
            <div>
              <span
                style={{
                  color: passwordStrenght.length ? "green" : "red",
                }}
              >
                •{" "}
              </span>
              <span>8+ characters</span>
            </div>
            <div>
              <span
                style={{
                  color: passwordStrenght.hasNumber ? "green" : "red",
                }}
              >
                •{" "}
              </span>
              <span>One number</span>
            </div>
            <div>
              <span
                style={{
                  color: passwordStrenght.hasLetter ? "green" : "red",
                }}
              >
                •{" "}
              </span>
              <span>One letter</span>
            </div>
          </PasswordStrengtWrapper>
        </InputWrapper>
        <StyledButton>Register</StyledButton>
      </Form>
    </FlexColumnContainer>
  );
}

export default RegisterContainer;
