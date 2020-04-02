import styled from "styled-components";

const mobileMediaQuery = `(min-device-width: 320px) and (max-device-width: 1024px)`;

export const HeaderBox = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 160px;
  @media only screen and ${mobileMediaQuery} {
    height: 100px;
  }
`;

export const HeaderLogo = styled.h1`
  font-family: "deathstar", sans-serif;
  letter-spacing: -1px;
  color: white;
  font-size: 5em;
  text-shadow: 1px 4px 2px #109cbc;
  margin-bottom: 0;
  @media only screen and ${mobileMediaQuery} {
    font-size: 3em;
    text-shadow: 1px 2px 1px #109cbc;
  }
`;

export const Descript = styled.p`
  margin: 0;
  color: white;
  font-size: 1.2em;
`;
