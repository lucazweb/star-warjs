import React from "react";
import { Card } from "./person-card.styled";
export const PersonCard = () => (
  <Card>
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
);
