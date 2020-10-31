import styled from "styled-components";

export const Navbar = styled.div`
  top: 0;
  position: fixed;
  background-color: white;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

export const Img = styled.img`
  width: 200px;
  margin-left: 20px;
`;

export const AnchorCenter = styled.a`
  margin: 10px;
  text-decoration: none;
  color: gray;
  font-size: 18px;
`;

export const AnchorLogin = styled.a`
  margin: 10px;
  font-size: 18px;
  text-decoration: none;
  color: gray;
`;
