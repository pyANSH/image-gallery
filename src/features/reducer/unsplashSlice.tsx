import { createSlice } from "@reduxjs/toolkit";
import { searchThunk } from "../thunk/searchThunk";

const initialState = {
  unsplash: [],
  queryStatus: "idle",
};

export const unsplashSlice = createSlice({
  name: "unsplash",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchThunk.pending, (state: any) => {
      state.unsplash = [];
      state.queryStatus = "loading";
    });

    builder.addCase(searchThunk.fulfilled, (state: any, action) => {
      state.unsplash = action.payload;
      state.queryStatus = "success";
    });

    builder.addCase(searchThunk.rejected, (state: any) => {
      state.unsplash = [];
      state.queryStatus = "failed";
    });
  },
});

export default unsplashSlice.reducer;
