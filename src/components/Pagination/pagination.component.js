import React from "react";
import Indicators from "./pagination.indicators.component";
import store from "../../store";
import { PaginationBox, PaginationButton } from "./pagination.styled";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import { connect } from "react-redux";
import { getPersons } from "../../store/actions/persons";

const handleNextPage = (currentPage) => {
  const page = currentPage + 1;
  store.dispatch(getPersons({ page }));
};

const handlePreviosPage = (currentPage) => {
  if (currentPage > 1) {
    const page = currentPage - 1;
    store.dispatch(getPersons({ page }));
  }
};

export const PaginationComponent = ({ page }) => (
  
  <PaginationBox>
   
    <PaginationButton onClick={() => handlePreviosPage(page)}>
      <GoTriangleLeft />
    </PaginationButton>

    <Indicators page={page} total={10} />

    <PaginationButton onClick={() => handleNextPage(page)}>
      <GoTriangleRight />
    </PaginationButton>
  
  </PaginationBox>
);

const mapStateToProps = ({ persons: { page } }) => {
  console.log('pagination component: ', page);
  return {
    page,
  };
};

export const Pagination = connect(mapStateToProps)(PaginationComponent);
