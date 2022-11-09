import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Reddit from "../../data/Reddit";

export const loadComments = createAsyncThunk(
  "comments/loadComments",
  async (id) => {
    let response = await Reddit.getComments(id);
    return response;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    data: {},
    isCommentLoading: false,
    failedToLoadComment: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state) => {
        state.isCommentLoading = true;
        state.failedToLoadComment = false;
      })

      .addCase(loadComments.fulfilled, (state, action) => {
        state.isCommentLoading = false;
        state.failedToLoadComment = false;
        action.payload.map((comment) => (state.data[comment.id] = comment));
      })

      .addCase(loadComments.rejected, (state) => {
        state.isCommentLoading = false;
        state.failedToLoadComment = true;
      });
  },
});

export const selectComments = (state) => state.comments.data;
export const selectCommentIsLoading = (state) =>
  state.comments.isCommentLoading;
export const selectCommentHasError = (state) =>
  state.comments.failedToLoadComment;

export default commentsSlice.reducer;
