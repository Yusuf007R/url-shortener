import styled from "styled-components";

export const FormInput = styled.input`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid #d3d4d7;
  padding: 10px;
  border-radius: ${(props) => props.radius || "auto"};
  color: black;
  &::placeholder {
    font-size: 20px;
  }
`;
