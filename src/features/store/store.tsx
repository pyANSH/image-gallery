import { configureStore } from "@reduxjs/toolkit";
import Miscellaneous from "../reducer/Miscellaneous/Miscellaneous";
import { logger } from "redux-logger";
import SearchSlice from "../reducer/searchSlice/SearchSlice";
export const store = configureStore({
  reducer: {
    miscellaneous: Miscellaneous,
    search: SearchSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
