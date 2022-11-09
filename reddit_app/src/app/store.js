import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "../features/Subreddits/subredditsSlice";
import searchBarReducer from "../features/SearchBar/searchBarSlice";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    searchbar: searchBarReducer,
  },
});
