import { createSlice } from "@reduxjs/toolkit";
import { searchThunk } from "../../thunk/searchThunk";

const initialState = {
  unsplashResult: [],
  queryStatus: "idle",
};

export const unsplashSlice = createSlice({
  name: "unsplash",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchThunk.pending, (state: any) => {
      state.unsplashResult = [];
      state.queryStatus = "loading";
    });

    builder.addCase(searchThunk.fulfilled, (state: any, action: any) => {
      state.unsplashResult = action.payload.response.results;
      state.queryStatus = "success";
    });

    builder.addCase(searchThunk.rejected, (state: any) => {
      state.unsplashResult = [];
      state.queryStatus = "failed";
    });
  },
});

export default unsplashSlice.reducer;
