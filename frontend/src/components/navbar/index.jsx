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
  return (
    <Navbar>
      <ImgContainer width={"200px"}>
        <StyledLink to="/">
          <Img src={logo} alt="xd" />
        </StyledLink>
      </ImgContainer>
      <DivSpaceAround>
        {props.center && (
          <Fragment>
            <StyledLink to="/">
              <AnchorCenter>Home</AnchorCenter>
            </StyledLink>
            <StyledLink to="/stats">
              <AnchorCenter>Stats</AnchorCenter>
            </StyledLink>
            <AnchorCenter href="https://github.com/Yusuf007R/urlShortener">
              Github
            </AnchorCenter>
          </Fragment>
        )}
      </DivSpaceAround>

      <DivSpaceAround width={"200px"}>
        {props.right && logged ? (
          <AccountImg onClick={logout} src={accountSvg} alt="xd"></AccountImg>
        ) : (
          <Fragment>
            <StyledLink to="/login">
              <AnchorLogin>Log in</AnchorLogin>
            </StyledLink>
            <StyledLink to="/register">
              <AnchorLogin>Sign up</AnchorLogin>
            </StyledLink>
          </Fragment>
        )}
      </DivSpaceAround>
    </Navbar>
  );
}

export default NavBar;
