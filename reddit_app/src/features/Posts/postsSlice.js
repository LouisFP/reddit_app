import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Reddit from "../../data/Reddit";

export const loadPosts = createAsyncThunk(
  "posts/loadPosts",
  async (subreddit) => {
    const response = await Reddit.getPosts(subreddit);
    return response;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: {},
    isPostLoading: false,
    failedToLoadPost: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state) => {
        state.isPostLoading = true;
        state.failedToLoadPost = false;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.isPostLoading = false;
        state.failedToLoadPost = false;
        state.posts = action.payload;
      })
      .addCase(loadPosts.rejected, (state) => {
        state.isPostLoading = false;
        state.failedToLoadPost = true;
      });
  },
});

export const selectPosts = (state) => state.posts;
export const selectPostIsLoading = (state) => state.isPostLoading;
export const selectPostHasError = (state) => state.failedToLoadPost;

export default postsSlice.reducer;
