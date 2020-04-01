import React from "react";
import {
  DetailCardWrapper,
  DetailsCardBody,
  StarshipBox,
} from "./details-card.styled";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

export const DetailsCardComponent = ({ person }) => {
  const history = useHistory();

  if (!person) {
    history.push("/");
  }

  return !person ? (
    <p>Select a person</p>
  ) : (
    <DetailCardWrapper>
      <h1 className="person-name">{person.name}</h1>
      {person && (
        <div
          className="person-image"
          style={{ backgroundImage: `url(${person.image})` }}
        ></div>
      )}
      <DetailsCardBody>
        <div className="person-attributes">
          <h2>Attributes</h2>
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
      </DetailsCardBody>

      <StarshipBox>
        <div className="starship-card">
          <h3>X-Wing</h3>
          <ul>
            <li>
              <strong>Model</strong>
              <span>T-65 Xwing</span>
            </li>
            <li>
              <strong>Max Atmosfere Speed</strong>
              <span>1050</span>
            </li>
          </ul>
        </div>
        <div className="starship-card">
          <h3>X-Wing</h3>
          <ul>
            <li>
              <strong>Model</strong>
              <span>T-65 Xwing</span>
            </li>
            <li>
              <strong>Max Atmosfere Speed</strong>
              <span>1050</span>
            </li>
          </ul>
        </div>
        <div className="starship-card">
          <h3>X-Wing</h3>
          <ul>
            <li>
              <strong>Model</strong>
              <span>T-65 Xwing</span>
            </li>
            <li>
              <strong>Max Atmosfere Speed</strong>
              <span>1050</span>
            </li>
          </ul>
        </div>
      </StarshipBox>
    </DetailCardWrapper>
  );
};

const mapStateToProps = ({ persons: { selected_person } }) => {
  return {
    person: selected_person,
  };
};

export const DetailsCard = connect(mapStateToProps)(DetailsCardComponent);
