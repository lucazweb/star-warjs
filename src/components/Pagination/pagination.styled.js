import styled from "styled-components";

export const PaginationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: 20px auto;
`;

export const PaginationButton = styled.button`
  display: flex;
  height: 45px;
  border: none;
  cursor: pointer;
  background: none;
  font-size: 3.4em;
  color: white;
  &:hover {
    color: #eea421;
  }
`;

export const IndicatorsBox = styled.div`
  display: flex;
  align-items: center;

  color: white;
  font-size: 2em;
  span {
    padding: 5px;
  }
`;
