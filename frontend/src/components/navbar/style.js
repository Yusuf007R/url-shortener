import styled, { css } from "styled-components";

export const Navbar = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 70px;
  @media (max-width: 550px) {
    height: 90px;
    width: 100vw;
  }
`;
export const RespMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: white;
  width: 100vw;
  height: 100vh;
  top: 0px;
  z-index: 10000;
  transform: translateX(
    ${({ state }) => (state === "entering" || state === "entered" ? 0 : 100)}vw
  );

  transition: 0.5s;
`;

export const Img = styled.img`
  width: 100px;
  @media (max-width: 550px) {
    width: 90px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
`;

export const AnchorCenter = styled.a`
  text-decoration: none;
  color: gray;
  font-size: 18px;
  @media (max-width: 550px) {
    font-size: 17px;
  }
`;

export const AnchorLogin = styled.span`
  border: 1px solid #d3d4d7;
  background-color: #574b90;
  font-size: 18px;
  padding: 12px;
  border-radius: 5px;
  color: white;
  @media (max-width: 550px) {
    padding: 10px;
  }
`;
export const DIVE = styled.div`
  &.my-node-enter {
    opacity: 0;
  }
  &.my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  &.my-node-exit {
    opacity: 1;
  }
  &.my-node-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  ${(props) =>
    props.navMenu &&
    css`
      text-align: center;
      margin-top: 60px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      height: 300px;
    `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  ${(props) =>
    props.navMenu &&
    css`
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      width: 60vw;
      margin-top: 100px;
    `}
`;

export const AccountImg = styled.img`
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

export const StyledButton = styled.div`
  font-size: 25px;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 25px;
  right: 25px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledIMG = styled.img`
  margin-left: 45px;
  width: 25px;
`;

export const DropdownMenu = styled.div`
  width: 280px;
  background-color: white;
  position: absolute;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  transition: 0.3s;
  height: ${({ state }) =>
    state === "entering" || state === "entered" ? 0 : 250}px;
  ${(props) =>
    !props.resp &&
    css`
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
      top: 71px;
    `}
`;

export const InfoContainer = styled.div`
  background-color: #574b90;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 11px;
`;

export const ProfileImg = styled.img`
  margin-bottom: 15px;
  width: 60px;
  border-radius: 50%;
  box-shadow: 1px 1px 10px #2b1533; ;
`;

export const ProfileName = styled.span`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const DropButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 30%;
`;

export const DropMenuButton = styled.button`
  border: 1px solid #d3d4d7;
  background-color: #574b90;
  font-size: 15px;
  width: 60px;
  height: 35px;
  border-radius: 5px;
  color: white;
`;
