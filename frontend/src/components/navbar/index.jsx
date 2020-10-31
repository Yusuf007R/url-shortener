import React from "react";
import { AnchorLogin, Navbar, Img, AnchorCenter } from "./style";

function NavBar(props) {
  return (
    <Navbar>
      <Img src="https://i.imgur.com/R7ZGbqj.png" alt="xd" />
      <div>
        <AnchorCenter href="https://developer.mozilla.org">Home</AnchorCenter>
        <AnchorCenter href="https://developer.mozilla.org">
          Features
        </AnchorCenter>
        <AnchorCenter href="https://developer.mozilla.org">
          Pricing
        </AnchorCenter>
      </div>
      <div>
        <AnchorLogin href="https://developer.mozilla.org">Log in</AnchorLogin>
        <AnchorLogin href="https://developer.mozilla.org">Sign up</AnchorLogin>
      </div>
    </Navbar>
  );
}

export default NavBar;
