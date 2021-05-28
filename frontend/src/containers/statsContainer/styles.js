import styled from "styled-components";

export const Styles = styled.div`
  table {
    th,
    td {
      border: none;
      border: solid 2px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      padding: 15px;
    }
  }
`;

export const Contianer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkAnchor = styled.a`
  display: block;
  text-decoration: none;
  color: #786fa6;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${(probs) => probs.width || "100px"};
  &:hover {
    cursor: pointer;
  }
`;

export const HeaderContainer = styled.th`
  background-color: #e6e6e6;
`;

export const OptionsContainer = styled.optgroup`
  font-size: 15px;
`;
