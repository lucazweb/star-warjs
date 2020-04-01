import styled from "styled-components";

const mobileMediaQuery = `(min-device-width: 320px) and (max-device-width: 1024px)`;

export const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 300px;
  margin: auto;

  .PreLoading-Scan {
    height: 100px;
  }

  p {
    margin: 0;
    color: white;
  }

  @media only screen and ${mobileMediaQuery} {
    width: 90%;
  }
`;
