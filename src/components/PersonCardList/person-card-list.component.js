import React from "react";
import { ListBox } from "./person-card-list.styled";
import { PersonCard } from "../PersonCard";
import { connect } from "react-redux";

const randomId = () => Math.random().toString(36).substr(2, 9);

const PersonCardListComponent = ({ persons }) => {
  return (
    <ListBox>
      {persons.map((person) => (
        <PersonCard key={randomId()} person={person} />
      ))}
    </ListBox>
  );
};

const mapStateToProps = ({ persons }) => {
  return {
    persons: persons.data,
  };
};

export const PersonCardList = connect(mapStateToProps)(PersonCardListComponent);
