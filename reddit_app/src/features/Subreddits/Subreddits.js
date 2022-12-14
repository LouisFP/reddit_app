import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectSubreddits } from "./subredditsSlice.js";
import { useDispatch } from "react-redux";
import { clearSearchTerm } from "../SearchBar/searchBarSlice.js";
import "./subreddit.css";

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  let icon = "http://getdrawings.com/free-icon/reddit-alien-icon-68.png";

  return (
    <section className="subreddits">
      {subreddits.length ? (
        <Link
          to="/"
          onClick={() => {
            dispatch(clearSearchTerm());
          }}
        >
          Click to go back to searching
        </Link>
      ) : (
        ""
      )}
      <ul className="subreddit-list">
        {!subreddits.length ? (
          <p className="exception">Please search something</p>
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
      </ul>
    </section>
  );
};

export default Subreddits;
