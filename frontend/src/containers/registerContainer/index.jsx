import { React, useEffect, useState } from "react";
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
  const [validEmail, setValidEmail] = useState(false);
  const [taken, setTaken] = useState({});
  const [labelError, setLabelError] = useState({});
  const history = useHistory();

  const emailVerify = (emailToVerify) => {
    return setValidEmail(
      new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(emailToVerify)
    );
  };

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

  useEffect(() => {
    console.log(taken);
  }, [taken]);

  const SubmitHandler = async (event) => {
    event.preventDefault();
    console.log([passwordStrenght.all, validEmail]);
    if (!(passwordStrenght.all && validEmail)) {
      return console.log("xd");
    }
    try {
      const result = await registerRequest({ username, password, email });
      console.log(result);
      if (result.ok) {
        history.push("/");
      }
    } catch (error) {
      if (error.msg.emailTaken || error.msg.usernameTaken)
        return setTaken(error.msg);
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
        <label>Username: </label>
        {taken.usernameTaken ? (
          <ErrorLabel>Username Already Taken</ErrorLabel>
        ) : (
          " "
        )}
        <InputWrapper>
          <FormInput
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
          ></FormInput>
        </InputWrapper>
        <label>Email Address: </label>
        {taken.emailTaken ? <ErrorLabel>Email Already Taken</ErrorLabel> : " "}
        <InputWrapper>
          <FormInput
            onChange={(e) => {
              emailVerify(e.target.value);
              setEmail(e.target.value);
            }}
            type="text"
          ></FormInput>
        </InputWrapper>
        <label>Password:</label>
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
