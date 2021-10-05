import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, API_KEY_3 } from "../api/api";

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async function (_, { rejectWithValue }) {
        try {
            const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU`;
            const response = await fetch(link);
            if (!response.ok) {
                throw new Error("Server Error!");
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = "rejected";
    state.error = action.payload;
};

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.movies = action.payload;
        },
        [fetchMovies.rejected]: setError,
    },
});

export const moviesReducer = moviesSlice.reducer;
