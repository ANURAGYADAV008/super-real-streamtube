import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "sidebar",
  initialState: true, // true = visible initially
  reducers: {
    toggleSidebar: (state) => !state, // just flip the boolean state
  },
});

export const { toggleSidebar } = toggleSlice.actions;
export default toggleSlice.reducer;
