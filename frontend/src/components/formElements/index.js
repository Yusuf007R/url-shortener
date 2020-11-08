import styled from "styled-components";

export const FormInput = styled.input`
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  border: 2px solid #d3d4d7;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  border: 1px solid #d3d4d7;
  background-color: #574b90;
  font-size: 18px;
  width: 100%;
  height: 45px;
  border-radius: 5px;
  color: white;
`;

export const Form = styled.form`
  width: 450px;
`;

export const Anchor = styled.span`
  margin-bottom: 20px;
  color: #574b90;
  font-weight: 600;
  float: ${(props) => props.float || "none"};
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
`;
