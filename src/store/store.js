import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./moviesApi";

export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddlware) =>
        getDefaultMiddlware().concat(moviesApi.middleware),
});
