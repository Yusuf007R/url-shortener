import React, { Fragment, useEffect, useState } from "react";
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
  LinkAnchor,
} from "./style";
import { useShortLink } from "../../hooks/use-shortLink";
import { baseUrl } from "../../config";

function HomeContainer(props) {
  const { shortLink, setUrl, url } = useShortLink();
  const [links, setLinks] = useState({ links: [] });

  useEffect(() => {
    test();
  }, []);

  const test = () => {
    let localLinks = localStorage.getItem("links");
    if (localLinks) {
      let local = JSON.parse(localLinks);
      setLinks(local);
    }
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const data = await shortLink(url);
      let localLinks = localStorage.getItem("links");
      if (!localLinks) {
        let local = { links: [] };
        local.links.unshift(data);
        local = JSON.stringify(local);
        localStorage.setItem("links", local);
        return test();
      }
      let local = JSON.parse(localLinks);
      if (local.links.length === 3) {
        local.links.pop();
        local.links.unshift(data);
        local = JSON.stringify(local);
        localStorage.setItem("links", local);
        return test();
      }
      local.links.push(data);
      local = JSON.stringify(local);
      localStorage.setItem("links", local);
      return test();
    } catch (error) {
      return;
    }
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
        {links ? (
          links.links.map((link, key) => {
            return (
              <LinkContainer key={key}>
                <LinkAnchor href={link.fullUrl}>{link.fullUrl}</LinkAnchor>
                <div>
                  <LinkAnchor
                    href={`${baseUrl}/${link.id}`}
                  >{`${baseUrl}/${link.id}`}</LinkAnchor>
                  <CopyButton>copy</CopyButton>
                </div>
              </LinkContainer>
            );
          })
        ) : (
          <p>not logged</p>
        )}
      </FlexColumnContainer>
    </Fragment>
  );
}

export default HomeContainer;
