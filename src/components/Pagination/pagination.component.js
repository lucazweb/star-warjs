import React from "react";
import Indicators from "./pagination.indicators.component";
import { PaginationBox, PaginationButton } from "./pagination.styled";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import { connect } from "react-redux";
import store from "../../store";
import { getPersons } from "../../store/actions/persons";

const handleNextPage = (currentPage) => {
  const page = currentPage + 1;
  const limit = 6;
  store.dispatch(getPersons({ page, limit }));
};

const handlePreviosPage = (currentPage) => {
  if (currentPage > 1) {
    const page = currentPage - 1;
    const limit = 6;
    store.dispatch(getPersons({ page, limit }));
  }
};

export const PaginationComponent = ({ page }) => (
  <PaginationBox onClick={() => handlePreviosPage(page)}>
    <PaginationButton>
      <GoTriangleLeft />
    </PaginationButton>

    <Indicators page={page} total={10} />

    <PaginationButton onClick={() => handleNextPage(page)}>
      <GoTriangleRight />
    </PaginationButton>
  </PaginationBox>
);

const mapStateToProps = ({ persons: { page } }) => {
  return {
    page,
  };
};

export const Pagination = connect(mapStateToProps)(PaginationComponent);
