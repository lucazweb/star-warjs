import React from "react";
import { DetailsContainer, BackButton } from "./details.styled";
import { Header } from "../../components/Header";
import { DetailsCard } from "../../components/DetailsCard";
import { GoTriangleLeft } from "react-icons/go";
import store from "../../store";
import { unselectPerson } from "../../store/actions/persons";

const handlePersonDetail = () => {
  store.dispatch(unselectPerson());
};

export const Details = () => (
  <DetailsContainer>
    <Header />
    <BackButton onClick={() => handlePersonDetail()} to="/">
      <GoTriangleLeft />
    </BackButton>
    <DetailsCard />
  </DetailsContainer>
);
