import React from "react";
import { DivContainer, Anchor, Title } from "./style";

function LoginHeader(props) {
  return (
    <DivContainer>
      <Title>Log in and start sharing</Title>
      <span>Don't have an account?</span>{" "}
      <Anchor href="https://developer.mozilla.org">Sign Up</Anchor>
    </DivContainer>
  );
}

export default LoginHeader;
