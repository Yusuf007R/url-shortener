import styled from "styled-components";

export const Img = styled.img`
  margin-bottom: 35px;
  width: 450px;
`;

export const Title = styled.h1`
  font-size: 45px;
  font-weight: 800;
  color: black;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: gray;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: -30px;
`;

export const Input = styled.input`
  width: 800px;
  font-size: 18px;

  height: 60px;
  box-sizing: border-box;
  border: none;
  border: solid 2px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  text-indent: 15px;
`;

export const Button = styled.button`
  font-size: 22px;
  height: 60px;
  border-radius: 5px;
  width: 120px;
  border: none;
  background-color: #574b90;
  margin-left: 5px;
  color: white;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 925px;
  background-color: white;
  box-sizing: border-box;
  border: none;
  border: solid 2px rgba(0, 0, 0, 0.3);
  font-size: 18px;
  height: 60px;
  border-radius: 5px;
  margin: 20px 0px 0px -30px;
  padding: 15px;
`;

export const LinkAnchor = styled.a`
  text-decoration: none;
  color: #786fa6;
`;

export const CopyButton = styled.button`
  color: #786fa6;
  margin-left: 20px;
  background-color: #786fa640;
  border: none;
  border-radius: 5px;
  padding: 10px 15px 10px;
  cursor: pointer;
`;
