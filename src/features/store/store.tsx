import { configureStore } from "@reduxjs/toolkit";
import Miscellaneous from "../reducer/Miscellaneous/Miscellaneous";
import { logger } from "redux-logger";
import SearchSlice from "../reducer/searchSlice/SearchSlice";
import unsplashSlice from "../reducer/unsplash/unsplashSlice";
export const store = configureStore({
  reducer: {
    miscellaneous: Miscellaneous,
    search: SearchSlice,
    unsplash: unsplashSlice,
  },
  //   code author:pyansh
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
