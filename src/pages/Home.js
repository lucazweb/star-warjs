import React from "react";
import { Header } from "../components/Header";
import { PersonCardList } from "../components/PersonCardList";

const Home = () => (
  <div className="home-container">
    <Header />
    <PersonCardList />
  </div>
);

export default Home;
