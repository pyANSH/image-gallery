import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShare: false,
  isDark: false,
  isPopup: false,
  res: {},
};
// //   code author:pyansh
const miscellaneousSlice = createSlice({
  name: "miscellaneous",
  initialState,
  reducers: {
    toggleDarkMode(state, action) {
      state.isDark = action.payload;
    },
    togglePopup(state, action) {
      state.isPopup = action.payload.isPopup;
      state.res = action.payload.res;
    },
    toggleShare(state, action) {
      state.isShare = action.payload;
    },
  },
});

export const { toggleDarkMode, togglePopup, toggleShare } =
  miscellaneousSlice.actions;
export default miscellaneousSlice.reducer;
