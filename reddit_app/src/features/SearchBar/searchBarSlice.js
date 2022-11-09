import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchbar",
  initialState: {
    term: "",
  },
  reducers: {
    clearSearchTerm: (state) => {
      state.term = "";
    },
    setSearchTerm: (state, action) => {
      state.term = action.payload;
    },
  },
});

export const fetchSearchTerm = (state) => state.searchbar.term;

export const { clearSearchTerm, setSearchTerm } = searchBarSlice.actions;

export default searchBarSlice.reducer;
