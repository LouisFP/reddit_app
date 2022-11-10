import React from "react";
import { Link } from "react-router-dom";
import "./index_extra.css";

const Index = () => {
  return (
    <div className="index">
      <p>Welcome to a smaller (worse) version of reddit!</p>
      <Link to="r">Click to get started!</Link>
    </div>
  );
};

export default Index;
