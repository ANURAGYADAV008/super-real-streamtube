import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./toggle"
const appStore=configureStore({
    reducer:{
        sidebar:appReducer
    }
})
export default appStore;