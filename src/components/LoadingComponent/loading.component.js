import React from "react";
import { LoadingBox } from "./loading.styled";
import { Scan } from "react-preloading-component";

export const Loading = () => (
  <LoadingBox>
    <Scan color="#109cbc" />
  </LoadingBox>
);
