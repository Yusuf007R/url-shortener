import React, { Fragment } from "react";
import {
  AnchorLogin,
  Navbar,
  Img,
  AnchorCenter,
  DivSpaceAround,
  ImgContainer,
  AccountImg,
} from "./style";

import logo from "../../assest/logo.png";
import { StyledLink } from "../link";
import accountSvg from "../../assest/account.svg";
import { useLogin } from "../../hooks/use-login";

function NavBar(props) {
  const { logout, logged } = useLogin();

  const RigthSide = () => {
    if (logged) {
      return (
        <AccountImg onClick={logout} src={accountSvg} alt="xd"></AccountImg>
      );
    }
    return (
      <Fragment>
        <StyledLink to="/login">
          <AnchorLogin>Log in</AnchorLogin>
        </StyledLink>
        <StyledLink to="/register">
          <AnchorLogin>Sign up</AnchorLogin>
        </StyledLink>
      </Fragment>
    );
  };

  return (
    <Navbar>
      <ImgContainer width={"200px"}>
        <StyledLink to="/">
          <Img src={logo} alt="xd" />
        </StyledLink>
      </ImgContainer>
      <DivSpaceAround>
        {props.center ? (
          <Fragment>
            <StyledLink to="/login">
              <AnchorCenter>Home</AnchorCenter>
            </StyledLink>
            <StyledLink to="/stats">
              <AnchorCenter>Stats</AnchorCenter>
            </StyledLink>
            <AnchorCenter href="https://github.com/Yusuf007R/urlShortener">
              Github
            </AnchorCenter>
          </Fragment>
        ) : (
          ""
        )}
      </DivSpaceAround>

      <DivSpaceAround width={"200px"}>
        {props.right ? <RigthSide></RigthSide> : ""}
      </DivSpaceAround>
    </Navbar>
  );
}

export default NavBar;
