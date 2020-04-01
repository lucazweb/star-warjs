import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { PersonCardList } from "../components/PersonCardList";
import { Pagination } from "../components/Pagination";
import { ErrorDisplay } from "../components/ErrorDisplay";
import { getPersons } from "../store/actions/persons";
import store from "../store";

const Home = () => {
  useEffect(() => {
    const page = 2;
    const limit = 6;

    store.dispatch(getPersons({ page, limit }));
    return;
  }, []);

  return (
    <div className="home-container">
      <Header />
      <ErrorDisplay />
      <PersonCardList />
      <Pagination />
    </div>
  );
};

export default Home;
