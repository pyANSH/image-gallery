import { createAsyncThunk } from "@reduxjs/toolkit";
import unsplash from "../../utils/unsplash";

export const searchThunk = createAsyncThunk(
  "unsplash/searchThunk",
  async (query: string) => {
    const response = await unsplash.search.getPhotos({ query });
    return response;
  }
);
