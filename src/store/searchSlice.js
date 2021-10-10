import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    suggest: null,
    movies: null,
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
        },
        setSuggest(state, action) {
            state.suggest = action.payload;
        },
        setMovies(state, action) {
            state.movies = action.payload;
        },
    },
});

export const { setSearch, setSuggest, setMovies } = searchSlice.actions;
export default searchSlice.reducer;
