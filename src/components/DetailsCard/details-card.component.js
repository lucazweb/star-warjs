import React from "react";
import {
  DetailCardWrapper,
  DetailsCardBody,
  StarshipBox,
} from "./details-card.styled";

export const DetailsCard = () => (
  <DetailCardWrapper>
    <h1 className="person-name">Luke Skywalker</h1>
    <div className="person-image"></div>
    <DetailsCardBody>
      <div className="person-attributes">
        <h2>Attributes</h2>
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
