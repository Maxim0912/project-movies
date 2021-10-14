import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    users: {},
    init: false,
    favorites: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setup: (state, action) => {
            state.users = action.payload.users || {};
            state.currentUser = action.payload.currentUser || null;
            state.favorites = action.payload.favorites || {};
        },
        init: (state) => {
            state.init = true;
        },
        signup: (state, action) => {
            if (!state.users[action.payload.login]) {
                state.users[action.payload.login] = action.payload;
                state.favorites[action.payload.login] = [];
            }
        },
        signin: (state, action) => {
            let login, password;
            if (state.users[action.payload.login]) {
                login = state.users[action.payload.login].login;
                password = state.users[action.payload.login].password;
            }
            if (
                login === action.payload.login &&
                password === action.payload.password
            ) {
                state.currentUser = login;
            }
        },
        signout: (state) => {
            state.currentUser = null;
        },
        toggleFavorites: (state, action) => {
            const user = action.payload.currentUser;
            const id = action.payload.item.id;
            if (
                state.favorites[user].filter((elem) => elem.id === id)
                    .length === 0
            ) {
                state.favorites[user] = [
                    ...state.favorites[user],
                    action.payload.item,
                ];
            } else {
                state.favorites[user] = state.favorites[user].filter(
                    (elem) => elem.id !== id
                );
            }
        },
    },
});

export const { setup, signup, signin, signout, init, toggleFavorites } =
    userSlice.actions;
export default userSlice.reducer;
