import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggle"
const appStore=configureStore({
    reducer:{
        sidebar:toggleSlice
    }
})
export default appStore;