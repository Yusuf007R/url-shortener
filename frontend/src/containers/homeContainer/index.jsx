import React, { useState } from "react";
import {
  CenteredContainer,
  ContainerText,
} from "../../components/globalContainers";

import urlShortenerSVG from "../../assest/urlShortener.svg";
import { Form, Img, SubTitle, Title } from "./style";
import { FormInput } from "../../components/forminput";
import { StyledButton } from "../../components/button";
import { useShortLink } from "../../hooks/use-shortLink";

function HomeContainer(props) {
  const { shortLink } = useShortLink();

  const [url, setUrl] = useState("");
  const SubmitHandler = async (event) => {
    event.preventDefault();
    const result = await shortLink(url);
    console.log(result);
    setUrl(`http://localhost:3001/${result}`);
  };

  return (
    <div>
      <CenteredContainer margin={"110px"}>
        <CenteredContainer width={"100%"} flexDirection={"row"}>
          <ContainerText align={"center"}>
            <Title>Short Links, Easy to use</Title>
            <SubTitle>A URL shortener built with MERN stack</SubTitle>
          </ContainerText>
          <Img src={urlShortenerSVG} alt="xd" />
        </CenteredContainer>
        <Form onSubmit={SubmitHandler}>
          <FormInput
            type={"text"}
            placeholder={"Short your link"}
            radius={"10px"}
            value={url}
            width={"45%"}
            height={"40px"}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          ></FormInput>

          <StyledButton
            size={"25px"}
            height={"65px"}
            radius={"7px"}
            width={"8%"}
          >
            Shorter
          </StyledButton>
        </Form>
      </CenteredContainer>
    </div>
  );
}

export default HomeContainer;
