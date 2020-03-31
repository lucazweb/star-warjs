import React from "react";
import { Header } from "../components/Header";
import { PersonCardList } from "../components/PersonCardList";
import { Pagination } from "../components/Pagination";

const Home = () => (
  <div className="home-container">
    <Header />
    <PersonCardList />
    <Pagination />
  </div>
);

export default Home;
