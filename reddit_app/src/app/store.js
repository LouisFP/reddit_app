import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "../features/Subreddits/subredditsSlice";
import searchBarReducer from "../features/SearchBar/searchBarSlice";
import postsReducer from "../features/Posts/postsSlice";
import commentsReducer from "../features/Comments/commentsSlice";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    searchbar: searchBarReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});
