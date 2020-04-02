import React from "react";
import { ListBox } from "./person-card-list.styled";
import { PersonCard } from "../PersonCard";
import { connect } from "react-redux";
import { Loading } from "../LoadingComponent";

const randomId = () => Math.random().toString(36).substr(2, 9);

const PersonCardListComponent = ({ persons, loading }) => {
  return loading ? (
    <Loading />
  ) : (
    <ListBox>
      {persons.map((person) => (
        <PersonCard key={randomId()} person={person} />
      ))}
    </ListBox>
  );
};

const mapStateToProps = ({ persons }) => {
  return {
    loading: persons.loading,
    persons: persons.data,
  };
};

export const PersonCardList = connect(mapStateToProps)(PersonCardListComponent);
