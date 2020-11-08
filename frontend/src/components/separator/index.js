import styled from "styled-components";

export const Separator = styled.p`
  display: block;
  width: ${(props) => props.width || "100%"};
  height: 1px;
  background: #dde0e2;
`;
