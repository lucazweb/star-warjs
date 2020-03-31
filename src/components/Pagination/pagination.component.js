import React from "react";
import Indicators from "./pagination.indicators.component";
import { PaginationBox, PaginationButton } from "./pagination.styled";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";

export const Pagination = () => (
  <PaginationBox>
    <PaginationButton>
      <GoTriangleLeft />
    </PaginationButton>

    <Indicators page={1} total={10} />

    <PaginationButton>
      <GoTriangleRight />
    </PaginationButton>
  </PaginationBox>
);
