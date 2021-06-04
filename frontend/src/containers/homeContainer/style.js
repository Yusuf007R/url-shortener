import styled from "styled-components";

export const Img = styled.img`
  margin-bottom: 35px;
  width: 450px;
  @media (max-width: 550px) {
    width: 350px;
  }
`;

export const Title = styled.h1`
  font-size: 1em;
  font-weight: 800;
  color: black;
`;

export const SubTitle = styled.p`
  font-size: 0.45em;
  font-weight: 800;
  color: gray;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Form = styled.form`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1000px;
  height: 60px;
  @media (max-width: 1000px) {
    width: 800px;
    font-size: 15px;
    height: 60px;
  }
  @media (max-width: 800px) {
    width: 600px;
    font-size: 15px;
    height: 60px;
  }
  @media (max-width: 600px) {
    width: 95vw;
    font-size: 15px;
    height: 120px;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 88%;
  font-size: 1em;
  height: 100%;
  box-sizing: border-box;
  border: none;
  border: solid 2px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  text-indent: 15px;
  @media (max-width: 600px) {
    width: 100%;
    height: 60px;
    text-indent: 10px;
  }
`;

export const Button = styled.button`
  width: 12%;
  font-size: 1.2em;
  height: 100%;
  border-radius: 5px;
  border: none;
  background-color: #574b90;
  margin-left: 5px;
  color: white;
  @media (max-width: 600px) {
    width: 100%;
    height: 45px;
    margin-left: 0px;
    margin-top: 5px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  background-color: white;
  box-sizing: border-box;
  border: none;
  border: solid 2px rgba(0, 0, 0, 0.3);
  font-size: 18px;
  height: 60px;
  border-radius: 5px;
  margin-top: 20px;
  padding: 15px;
  @media (max-width: 1000px) {
    display: none;
  }
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

export const Anchor = styled.a`
  color: #786fa6;
  width: 50%;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  &:hover {
    color: #786fd0;
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContainerText = styled.div`
  font-size: 45px;
  text-align: center;
  @media (max-width: 550px) {
    font-size: 38px;
  }
  @media (max-width: 450px) {
    font-size: 34px;
  }
  @media (max-width: 350px) {
    font-size: 30px;
  }
`;
