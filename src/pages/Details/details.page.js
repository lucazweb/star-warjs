import React from "react";
import { DetailsContainer, BackButton } from "./details.styled";
import { Header } from "../../components/Header";
import { DetailsCard } from "../../components/DetailsCard";
import { GoTriangleLeft } from "react-icons/go";

export const Details = () => (
  <DetailsContainer>
    <Header />
    <BackButton to='/'> 
      <GoTriangleLeft />
    </BackButton>
    <DetailsCard />
  </DetailsContainer>
);
