import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchTerm } from "./searchBarSlice";
import { loadSubreddits } from "../Subreddits/subredditsSlice";
import { setSearchTerm } from "./searchBarSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(fetchSearchTerm);
  const searchIconUrl =
    "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg";

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loadSubreddits(searchTerm));
  };
  return (
    <div className="searchBar">
      <h2>Search for subreddits</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <img src={searchIconUrl} alt="Search-icon" />
          <input
            id="search"
            placeholder="Search for subreddits"
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            value={searchTerm}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
