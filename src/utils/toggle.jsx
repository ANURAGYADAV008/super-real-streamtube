import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "sidebar",
  initialState:{
    isMenuOpen:true,
  } ,
  reducers: {
    toggleSidebar:(state)=>{
      state.isMenuOpen=!state.isMenuOpen
    },
    closemenu:(state)=>{
      state.isMenuOpen=false
    }
  },
});

export const { toggleSidebar,closemenu} = appSlice.actions;
export default appSlice.reducer;
