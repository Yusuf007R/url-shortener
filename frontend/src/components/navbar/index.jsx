import React from "react";
import {
  AnchorLogin,
  Navbar,
  Img,
  AnchorCenter,
  DivSpaceAround,
  ImgContainer,
} from "./style";

import logo from "../../assest/logo.png";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <Navbar>
      <ImgContainer>
        <Link to="/">
          <Img src={logo} alt="xd" />
        </Link>
      </ImgContainer>
      <DivSpaceAround>
        <AnchorCenter href="https://developer.mozilla.org">Home</AnchorCenter>
        <AnchorCenter href="https://developer.mozilla.org">
          Features
        </AnchorCenter>
        <AnchorCenter href="https://developer.mozilla.org">
          Pricing
        </AnchorCenter>
      </DivSpaceAround>
      <DivSpaceAround width={"200px"}>
        <Link to="/login">
          <AnchorLogin>Log in</AnchorLogin>
        </Link>
        <Link to="/register">
          <AnchorLogin>Sign up</AnchorLogin>
        </Link>
      </DivSpaceAround>
    </Navbar>
  );
}

export default NavBar;
