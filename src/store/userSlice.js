import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    users: {},
    init: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setup: (state, action) => {
            state.users = action.payload.users || {};
            state.currentUser = action.payload.currentUser || null;
        },
        init: (state) => {
            state.init = true;
        },
        signup: (state, action) => {
            if (!state.users[action.payload.login]) {
                state.users[action.payload.login] = action.payload;
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
    },
});

export const { setup, signup, signin, signout, init } = userSlice.actions;
export default userSlice.reducer;
