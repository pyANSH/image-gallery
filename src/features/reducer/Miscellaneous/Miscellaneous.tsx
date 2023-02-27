import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const { toggleDarkMode, togglePopup } = miscellaneousSlice.actions;
export default miscellaneousSlice.reducer;
