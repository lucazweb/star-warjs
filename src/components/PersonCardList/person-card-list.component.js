import React from "react";
import { ListBox } from "./person-card-list.styled";
import { PersonCard } from "../PersonCard";

export const PersonCardList = () => (
  <ListBox>
    <PersonCard />
    <PersonCard />
    <PersonCard />

    <PersonCard />
    <PersonCard />
    <PersonCard />
  </ListBox>
);
