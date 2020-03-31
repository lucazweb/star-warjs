import React from "react";
import { Card } from "./person-card.styled";
import { useHistory } from 'react-router-dom';

export const PersonCard = () => {

  const history = useHistory();
  const selectPerson = () => {
    history.push('/details/1');
  }

  return (
    <Card onClick={() => selectPerson()}>
      <div className="card-body">
        <div className="person-image"></div>
        <div className="person-info">
          <ul>
            <li>
              <strong>Height</strong>
              <span>177</span>
            </li>
            <li>
              <strong>Mass</strong>
              <span>177</span>
            </li>
            <li>
              <strong>Hair color</strong>
              <span>Blond</span>
            </li>
            <li>
              <strong>Skin color</strong>
              <span>Fair</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-footer">
        <span>Luke Skywalker</span>
      </div>
    </Card>
  )
};
