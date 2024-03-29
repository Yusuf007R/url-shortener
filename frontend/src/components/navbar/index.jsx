import React, { Fragment, useCallback, useEffect, useState } from "react";
import {
  AnchorLogin,
  Navbar,
  Img,
  AnchorCenter,
  ImgContainer,
  AccountImg,
  RespMenuContainer,
  ButtonContainer,
  StyledButton,
  NavContainer,
  StyledIMG,
  MenuButtonContainer,
  DropdownMenu,
  InfoContainer,
  ProfileImg,
  ProfileName,
  DropButtonContainer,
  DropMenuButton,
} from "./style";
import logo from "../../assest/logo.png";
import profilePicture from "../../assest/profilePicture.jpg";
import { StyledLink } from "../link";
import accountSvg from "../../assest/account.svg";
import { useLogin } from "../../hooks/use-login";
import MenuButton from "../../assest/menuButton.svg";

import { Transition } from "react-transition-group";
import { getUserData } from "../../services/getDataAPI";

const NavItems = (props) => {
  const [dropDownMenu, setDropDownMenu] = useState(true);
  const { width } = props;
  const breakPoint = width > 600;

  return (
    <Fragment>
      <NavContainer {...props}>
        {props.navMenu && (
          <StyledButton
            onClick={() => {
              props.MenuToggler();
            }}
          >
            ✖
          </StyledButton>
        )}
        {(breakPoint || props.navMenu) && (
          <Fragment>
            <StyledLink to="/">
              <AnchorCenter>Home</AnchorCenter>
            </StyledLink>
            {props.logged && (
              <StyledLink to="/stats">
                <AnchorCenter>Stats</AnchorCenter>
              </StyledLink>
            )}
            <AnchorCenter href="https://github.com/Yusuf007R/urlShortener">
              Github
            </AnchorCenter>
          </Fragment>
        )}
      </NavContainer>
      {breakPoint || (props.toggleMenu && props.navMenu) ? (
        <ButtonContainer {...props}>
          {props.logged ? (
            <Fragment>
              <AccountImg
                onClick={() => {
                  setDropDownMenu((prev) => !prev);
                }}
                src={accountSvg}
                alt="accountIMG"
              ></AccountImg>
              <Transition in={dropDownMenu} timeout={500}>
                {(state) => {
                  if (props.toggleMenu) state = "xd";
                  return (
                    <DropdownMenu state={state} resp={props.toggleMenu}>
                      {!props.toggleMenu && (
                        <InfoContainer>
                          <ProfileImg src={profilePicture}></ProfileImg>
                          <ProfileName>Yusuf Rawat</ProfileName>
                          <span>{props.userData.date}</span>
                        </InfoContainer>
                      )}

                      <DropButtonContainer>
                        {!props.toggleMenu && (
                          <StyledLink to="/stats">
                            <DropMenuButton>Stats</DropMenuButton>
                          </StyledLink>
                        )}
                        <DropMenuButton onClick={props.logout}>
                          Logout
                        </DropMenuButton>
                      </DropButtonContainer>
                    </DropdownMenu>
                  );
                }}
              </Transition>
            </Fragment>
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
        </ButtonContainer>
      ) : (
        <MenuButtonContainer>
          <StyledIMG
            onClick={() => {
              props.MenuToggler();
            }}
            src={MenuButton}
            alt="menu button"
          ></StyledIMG>
        </MenuButtonContainer>
      )}
    </Fragment>
  );
};

function NavBar(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const ToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  const { logout, logged } = useLogin();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;
  const [userData, setUserData] = useState({});
  const userDataFuncCallBack = useCallback(() => {
    userDataFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userDataFunc = async () => {
    const user = await getUserData();
    let tempDate = new Date(user.date);
    setUserData({
      email: user.email,
      date: `Member since ${
        monthList[tempDate.getMonth()]
      }.${tempDate.getFullYear()}`,
    });
  };

  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    if (logged) userDataFuncCallBack();
  }, [userDataFuncCallBack, logged]);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <Fragment>
      <Navbar>
        <ImgContainer>
          <StyledLink to="/">
            <Img src={logo} alt="logo of the website" />
          </StyledLink>
        </ImgContainer>
        <NavItems
          {...props}
          logged={logged}
          logout={logout}
          userData={userData}
          MenuToggler={ToggleMenu}
          toggleMenu={toggleMenu}
          navMenu={false}
          width={width}
        />
      </Navbar>
      {width < breakpoint && (
        <Transition in={toggleMenu} timeout={500}>
          {(state) => (
            <RespMenuContainer state={state}>
              <NavItems
                logged={logged}
                logout={logout}
                userData={userData}
                navMenu={true}
                MenuToggler={ToggleMenu}
                width={width}
                toggleMenu={toggleMenu}
                {...props}
              />
            </RespMenuContainer>
          )}
        </Transition>
      )}
    </Fragment>
  );
}

export default NavBar;
