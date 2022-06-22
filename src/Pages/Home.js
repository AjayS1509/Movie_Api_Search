import React from "react";
import Movie from "./Movie";
import Search from "./Search";
import "./Pages.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;
