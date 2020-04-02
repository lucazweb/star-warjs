import React from "react";
import { IndicatorsBox } from "./pagination.styled";

const Indicators = (props) => (
  <IndicatorsBox>
    <span>Page {props.page}</span>
  </IndicatorsBox>
);

export default Indicators;
