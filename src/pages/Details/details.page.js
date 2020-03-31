import React from "react";
import { DetailsContainer, BackButton } from "./details.styled";
import { DetailsCard } from "../../components/DetailsCard";

export const Details = () => (
  <DetailsContainer>
    <BackButton> Voltar</BackButton>
    <DetailsCard />
  </DetailsContainer>
);
