import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blog/slice";

export const store = configureStore({
    reducer:{
        blogReducer,
    }
})
