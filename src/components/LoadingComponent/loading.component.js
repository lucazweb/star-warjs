import React from "react";
import { LoadingBox } from "./loading.styled";
import { Scan } from "react-preloading-component";

export const Loading = () => (
  <LoadingBox>
    <Scan color="#109cbc" />
    <p>Fetching data from a galaxy far, far away..</p>
  </LoadingBox>
);
