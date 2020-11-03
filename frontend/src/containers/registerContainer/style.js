import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 600px;
`;

export const FormInput = styled.input`
  width: 450px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #d3d4d7;
  padding: 10px;
`;

export const Anchor = styled.span`
  text-decoration: underline;
  color: #574b90;
  font-weight: 600;
  float: ${(props) => props.float || "none"};
  &:hover {
    cursor: pointer;
  }
`;

export const DivContainerHeader = styled.div`
  margin: 30px;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

export const SubmitButton = styled.button`
  border: 1px solid #d3d4d7;
  margin-top: 20px;
  background-color: #574b90;
  font-size: 18px;
  padding: 12px;
  width: 100%;
  border-radius: 5px;
  color: white;
`;

export const Separator = styled.p`
  margin-top: 20px;
  content: "";
  display: block;
  width: 450px;
  height: 1px;
  background: #dde0e2;
`;
