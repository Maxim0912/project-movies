import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./moviesApi";
import searchReducer from "./searchSlice";
import pageReducer from "./pageSlice";

export const store = configureStore({
    reducer: {
        page: pageReducer,
        search: searchReducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddlware) =>
        getDefaultMiddlware().concat(moviesApi.middleware),
});
