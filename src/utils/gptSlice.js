import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSearch",
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        isError: false
    },
    reducers: {
        toggleSearch(state) {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovies(state, action) {
            state.gptMovies = action.payload;
        },
        setIsError(state) {
            state.isError = true;
        }
    }
});
export const { toggleSearch, addGptMovies, setIsError } = gptSlice.actions;
export default gptSlice.reducer;