import React, { useState, useEffect } from "react";
import {
  DetailCardWrapper,
  DetailsCardBody,
  StarshipBox,
} from "./details-card.styled";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import placeholderImg from "../../assets/placeholder.jpg";

export const DetailsCardComponent = ({ person }) => {
  const history = useHistory();
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    if (person) {
      const data = person.starships;

      try {
        axios.all(data.map((url) => axios.get(url))).then((res) => {
          const result = res.map((response) => response.data);
          setStarships(result);
        });
      } catch (err) {
        console.log(err);
      }
    }
  });

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
          style={{ backgroundImage: `url(${person.image || placeholderImg})` }}
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
              <strong>Gender</strong>
              <span>{person.gender}</span>
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
        {starships.length > 0 ? (
          <React.Fragment>
            {starships.map((starship) => (
              <div key={starship.created} className="starship-card">
                <h3>{starship.name}</h3>
                <ul>
                  <li>
                    <strong>Model</strong>
                    <span>{starship.model}</span>
                  </li>
                  <li>
                    <strong>Max Speed</strong>
                    <span>{starship.max_atmosphering_speed}</span>
                  </li>
                  <li>
                    <strong>Cargo Capacity</strong>
                    <span>{starship.cargo_capacity}</span>
                  </li>
                </ul>
              </div>
            ))}
          </React.Fragment>
        ) : (
          <p> No starships found </p>
        )}
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
