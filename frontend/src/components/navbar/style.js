import styled from "styled-components";

export const Navbar = styled.div`
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
    height: 110px;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100px;
  @media (max-width: 550px) {
    width: 90px;
  }
`;

export const ImgContainer = styled.div`
  display: grid;
  place-items: center;
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

export const DivSpaceAround = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
`;

export const AccountImg = styled.img`
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;
