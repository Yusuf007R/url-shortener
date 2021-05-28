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
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 550;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <Navbar>
      <ImgContainer>
        <StyledLink to="/">
          <Img src={logo} alt="logo of the website" />
        </StyledLink>
      </ImgContainer>
      <DivSpaceAround>
        {props.center && (
          <Fragment>
            {width > breakpoint && (
              <StyledLink to="/">
                <AnchorCenter>Home</AnchorCenter>
              </StyledLink>
            )}
            <StyledLink to="/stats">
              <AnchorCenter>Stats</AnchorCenter>
            </StyledLink>
            <AnchorCenter href="https://github.com/Yusuf007R/urlShortener">
              Github
            </AnchorCenter>
          </Fragment>
        )}
      </DivSpaceAround>
      <DivSpaceAround>
        {props.right && logged ? (
          <AccountImg
            onClick={logout}
            src={accountSvg}
            alt="accountIMG"
          ></AccountImg>
        ) : (
          <Fragment>
            {width > breakpoint && (
              <StyledLink to="/login">
                <AnchorLogin>Log in</AnchorLogin>
              </StyledLink>
            )}

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
