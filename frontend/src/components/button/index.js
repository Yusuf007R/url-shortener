import styled from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid #d3d4d7;
  background-color: #574b90;
  font-size: 18px;
  padding: 12px;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) => props.radius || "5px"};
  color: white;
  font-size: ${(props) => props.size || "auto"};
`;
