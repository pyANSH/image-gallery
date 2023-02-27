import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const miscellaneousSlice = createSlice({
  name: "miscellaneous",
  initialState,
  reducers: {
    toggleDarkMode(state, action) {
      state.isDark = action.payload;
    },
  },
});

export const { toggleDarkMode } = miscellaneousSlice.actions;
export default miscellaneousSlice.reducer;
