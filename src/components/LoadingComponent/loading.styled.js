import styled from "styled-components";

const mobileMediaQuery = `(min-device-width: 320px) and (max-device-width: 1024px)`;

export const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 300px;
  margin: auto;
  @media only screen and ${mobileMediaQuery} {
    width: 90%;
  }
`;
