import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { PersonCardList } from "../components/PersonCardList";
import { Pagination } from "../components/Pagination";

import { getPersons } from "../store/actions/persons";
import store from "../store";

const Home = () => {
  useEffect(() => {
    store.dispatch(getPersons());
    return;
  }, []);

  return (
    <div className="home-container">
      <Header />
      <PersonCardList />
      <Pagination />
    </div>
  );
};

export default Home;
