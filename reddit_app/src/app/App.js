import React from "react";
import "./App.css";
import { useEffect } from "react";
import Reddit from "../data/Reddit";
import { Routes, Route } from "react-router-dom";
import Posts from "../features/Posts/Posts";
import Home from "../components/Home";
import Index from "../components/Index";
import Post from "../features/Posts/Post";

function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      Reddit.getAccessToken();
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/r/:subreddit/:id" element={<Post />} />
        <Route path="/r/:subreddit" element={<Posts />} />
        <Route path="/r" element={<Home />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
