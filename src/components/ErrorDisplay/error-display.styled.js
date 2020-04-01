import styled, { keyframes } from "styled-components";

export const keyFrameError = keyframes`
  0% {
    opacity: 1
  }
  95% {
    opacity: 0;
  }
  100% {
    display: none;
  }`;

export const ErrorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25px;
  background: #900;
  color: white;
  //animation: ${keyFrameError} 2s ease-in-out 0s 1;
`;
