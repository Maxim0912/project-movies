import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./moviesApi";
import searchReducer from "./searchSlice";
import pageReducer from "./pageSlice";
import userReducer from "./userSlice";
import { userMiddleware } from "./middleware/userMiddleware";

export const store = configureStore({
    reducer: {
        page: pageReducer,
        search: searchReducer,
        user: userReducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddlware) =>
        getDefaultMiddlware().concat(moviesApi.middleware, userMiddleware),
});
