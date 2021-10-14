import {
    init,
    setup,
    signup,
    signin,
    signout,
    toggleFavorites,
} from "../userSlice";
import { loadState } from "../../helpers/loadState";
import { saveState } from "../../helpers/saveState";

export const userMiddleware = (store) => (next) => (action) => {
    next(action);

    if (init.match(action)) {
        const users = loadState("users");
        const currentUser = loadState("currentUser");
        const favorites = loadState("favorites");
        store.dispatch(
            setup({
                users,
                currentUser,
                favorites,
            })
        );
    }

    if (signup.match(action)) {
        const users = store.getState().user.users;
        const favorites = store.getState().user.favorites;
        saveState("users", users);
        saveState("favorites", favorites);
    }

    if (signin.match(action) || signout.match(action)) {
        const currentUser = store.getState().user.currentUser;
        saveState("currentUser", currentUser);
    }

    if (toggleFavorites.match(action)) {
        const favorites = store.getState().user.favorites;
        saveState("favorites", favorites);
    }
};
