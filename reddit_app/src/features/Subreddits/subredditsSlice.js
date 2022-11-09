import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Reddit from "../../data/Reddit.js";

export const loadSubreddits = createAsyncThunk(
  "subreddits/loadSubreddits",
  async (subreddit) => {
    const response = await Reddit.getFilteredSubreddits(subreddit);
    return response;
  }
);

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    data: {},
    isSubredditLoading: false,
    failedtoLoadSubreddit: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSubreddits.pending, (state) => {
        state.isSubredditLoading = true;
        state.failedtoLoadSubreddit = false;
      })

      .addCase(loadSubreddits.fulfilled, (state, action) => {
        state.isSubredditLoading = false;
        state.failedtoLoadSubreddit = false;
        state.data = action.payload;
      })

      .addCase(loadSubreddits.rejected, (state) => {
        state.isSubredditLoading = false;
        state.failedtoLoadSubreddit = true;
      });
  },
});

export const selectSubreddits = (state) => state.subreddits.data;
export const selectSubisLoading = (state) =>
  state.subreddits.isSubredditLoading;
export const selectSubHasError = (state) =>
  state.subreddits.failedtoLoadSubreddit;

export default subredditsSlice.reducer;
