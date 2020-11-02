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
  justify-content: space-around;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

export const Img = styled.img`
  width: 100px;
`;

export const ImgContainer = styled.div`
  width: 200px;
`;

export const AnchorCenter = styled.a`
  text-decoration: none;
  color: gray;
  font-size: 18px;
`;

export const AnchorLogin = styled.button`
  border: 1px solid #d3d4d7;
  background-color: #574b90;
  font-size: 18px;
  padding: 12px;
  border-radius: 5px;
  color: white;
`;

export const DivSpaceAround = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${(props) => props.width || "250px"};
`;
