import React from "react";
import {
  AnchorLogin,
  Navbar,
  Img,
  AnchorCenter,
  DivSpaceAround,
} from "./style";

import logo from "../../assest/logo.png";

function NavBar(props) {
  return (
    <Navbar>
      <Img src={logo} alt="xd" />
      <DivSpaceAround>
        <AnchorCenter href="https://developer.mozilla.org">Home</AnchorCenter>
        <AnchorCenter href="https://developer.mozilla.org">
          Features
        </AnchorCenter>
        <AnchorCenter href="https://developer.mozilla.org">
          Pricing
        </AnchorCenter>
      </DivSpaceAround>
      <DivSpaceAround>
        <AnchorLogin href="https://developer.mozilla.org">Log in</AnchorLogin>
        <AnchorLogin href="https://developer.mozilla.org">Sign up</AnchorLogin>
      </DivSpaceAround>
    </Navbar>
  );
}

export default NavBar;
