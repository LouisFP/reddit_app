import React from "react";
import Body from "../features/Body/Body";
import SearchBar from "../features/SearchBar/SearchBar";

const Home = () => {
  return (
    <div className="Home">
      <SearchBar />
      <Body />
    </div>
  );
};

export default Home;
