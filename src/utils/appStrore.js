import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './movieSlice';
import gptSearchReducer from "./gptSlice";

const appStrore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gptSearch:gptSearchReducer
    },
});

export default appStrore;