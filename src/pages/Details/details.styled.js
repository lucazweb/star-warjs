import styled from "styled-components";
import { Link } from 'react-router-dom';

export const DetailsContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 28px;
  height: 28px;
  top: 25px;
  left: 18px;
  color: #109cbc;
  font-size: 1.3em;
  cursor: pointer;
  background: white;
  border-radius: 50%;
  cursor: pointer; 

  &:hover{
    background: #109cbc;
    color: white;
  }

  svg{
    margin-left: -1px;
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 60px;
  padding: 4px;
  background: black;
`;
