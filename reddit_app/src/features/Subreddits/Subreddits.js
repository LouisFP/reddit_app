import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectSubreddits } from "./subredditsSlice.js";

const Subreddits = () => {
  const subreddits = useSelector(selectSubreddits);
  let icon = "http://getdrawings.com/free-icon/reddit-alien-icon-68.png";
  return (
    <section className="subreddits">
      {!subreddits.length ? (
        <p>Please search something</p>
      ) : (
        subreddits.map((subreddit) => {
          return (
            <Link to={subreddit.name} key={subreddit.id}>
              <li key={subreddit.id} className="subreddit">
                <img
                  src={subreddit.icon ? subreddit.icon : icon}
                  alt="Default-Icon"
                />
                <h2>{subreddit.name}</h2>
                <h3>{subreddit.numSubscribers}</h3>
              </li>
            </Link>
          );
        })
      )}
    </section>
  );
};

export default Subreddits;
