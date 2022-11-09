import React from "react";
import { useSelector } from "react-redux";
import Subreddits from "../Subreddits/Subreddits";
import {
  selectSubisLoading,
  selectSubHasError,
} from "../Subreddits/subredditsSlice";

const Body = () => {
  const subIsLoading = useSelector(selectSubisLoading);
  const subHasError = useSelector(selectSubHasError);

  if (subIsLoading) {
    return <h2 className="loading">Loading...</h2>;
  }
  if (subHasError) {
    return <h2 className="error-icon">Try Again...</h2>;
  }

  return (
    <section className="body-container">
      <Subreddits />
    </section>
  );
};

export default Body;
