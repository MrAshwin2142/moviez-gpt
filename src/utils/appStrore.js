import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
const appStrore = configureStore({
    reducer:{
        user:userReducer,
    },
});

export default appStrore;