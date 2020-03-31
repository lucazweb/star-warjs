import React from "react";
import { IndicatorsBox } from "./pagination.styled";

const Indicators = (props) => (
  <IndicatorsBox>
    <span>{props.page}</span> / <span>{props.total}</span>
  </IndicatorsBox>
);

export default Indicators;
