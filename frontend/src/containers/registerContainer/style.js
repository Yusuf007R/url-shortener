import styled from "styled-components";

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

export const Separator = styled.p`
  margin-top: 20px;
  content: "";
  display: block;
  width: 450px;
  height: 1px;
  background: #dde0e2;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 600px;
`;
