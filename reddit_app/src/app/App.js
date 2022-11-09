import React from "react";
import "./App.css";
import { useEffect } from "react";
import Reddit from "../data/Reddit";
import SearchBar from "../features/SearchBar/SearchBar";
import Body from "../features/Body/Body";

function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      Reddit.getAccessToken();
    });
  }, []);

  return (
    <div className="App">
      <SearchBar />
      <Body />
    </div>
  );
}

export default App;
