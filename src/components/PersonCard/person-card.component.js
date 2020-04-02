import React from "react";
import { Card } from "./person-card.styled";
import { useHistory } from "react-router-dom";
import { selectPerson } from "../../store/actions/persons";
import store from "../../store";

export const PersonCard = ({ person }) => {
  const history = useHistory();

  const handlePersonSelection = (person) => {
    store.dispatch(selectPerson(person));
    history.push("/details");
  };

  return (
    <Card onClick={() => handlePersonSelection(person)}>
      <div className="card-body">
        <div
          className="person-image"
          style={{ backgroundImage: `url(${person.image})` }}
        ></div>
        <div className="person-info">
          <ul>
            <li>
              <strong>Height</strong>
              <span>{person.height}</span>
            </li>
            <li>
              <strong>Mass</strong>
              <span>{person.mass}</span>
            </li>
            <li>
              <strong>Hair color</strong>
              <span>{person.hair_color}</span>
            </li>
            <li>
              <strong>Skin color</strong>
              <span>{person.skin_color}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-footer">
        <span>{person.name}</span>
      </div>
    </Card>
  );
};
