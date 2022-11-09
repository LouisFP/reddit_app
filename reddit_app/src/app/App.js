import React from "react";
import "./App.css";
import { useEffect } from "react";
import Reddit from "../data/Reddit";
import { Routes, Route } from "react-router-dom";
import Posts from "../features/Posts/Posts";
import Comments from "../features/Comments/Comments";
import Home from "../components/Home";
import Index from "../components/Index";

function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      Reddit.getAccessToken();
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/r/:subreddit/:id" element={<Comments />} />
        <Route path="/r/:subreddit" element={<Posts />} />
        <Route path="/r" element={<Home />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
