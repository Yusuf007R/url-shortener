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

  @media (max-width: 700px) {
    table {
      thead {
        display: none;
      }
      tbody,
      tr,
      td {
        display: block;
        width: 100%;
      }
      tr {
        margin-bottom: 15px;
      }
      td {
        text-align: right;
        padding-left: 70%;
        margin-left: -25px;
        text-align: right;
        position: relative;
        @media (max-width: 550px) {
          padding-left: 50%;
          margin-left: -15px;
        }
        @media (max-width: 450px) {
          padding-left: 25%;
          margin-left: 0px;
        }
      }
      td::before {
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: 50%;
        padding-left: 5px;
        font-size: 15px;
        font-weight: bold;
        text-align: left;
      }
    }
  }
`;

export const Contianer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledTd = styled.td``;

export const LinkAnchor = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #786fa6;
  overflow: hidden;
  white-space: nowrap;
  width: 250px;
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
