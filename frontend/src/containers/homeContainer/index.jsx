import React, { Fragment, useState } from "react";
import {
  ContainerText,
  FlexColumnContainer,
  FlexRowContainer,
} from "../../components/globalContainers";
import urlShortenerSVG from "../../assest/urlShortener.svg";

import {
  Form,
  Input,
  Img,
  SubTitle,
  Title,
  Button,
  LinkContainer,
  CopyButton,
  LinkSpan,
} from "./style";
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
    <Fragment>
      <FlexRowContainer>
        <ContainerText>
          <Title>Short Links, Easy to use</Title>
          <SubTitle>A URL shortener built with MERN stack</SubTitle>
        </ContainerText>
        <Img src={urlShortenerSVG} alt="xd" />
      </FlexRowContainer>
      <FlexColumnContainer>
        <Form onSubmit={SubmitHandler}>
          <Input
            type="text"
            placeholder="Short your link"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          ></Input>
          <Button>Shorter</Button>
        </Form>
        <LinkContainer>
          <LinkSpan>www.google.com</LinkSpan>
          <div>
            <LinkSpan>https://yusuf.ly/1212</LinkSpan>
            <CopyButton>copy</CopyButton>
          </div>
        </LinkContainer>
        <LinkContainer>
          <LinkSpan>www.google.com</LinkSpan>
          <div>
            <LinkSpan>https://yusuf.ly/1212</LinkSpan>
            <CopyButton>copy</CopyButton>
          </div>
        </LinkContainer>
        <LinkContainer>
          <LinkSpan>www.google.com</LinkSpan>
          <div>
            <LinkSpan>https://yusuf.ly/1212</LinkSpan>
            <CopyButton>copy</CopyButton>
          </div>
        </LinkContainer>
      </FlexColumnContainer>
    </Fragment>
  );
}

export default HomeContainer;
