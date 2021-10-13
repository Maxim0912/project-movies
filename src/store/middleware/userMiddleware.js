import { init, setup, signup, signin, signout } from "../userSlice";
import { loadState } from "../../helpers/loadState";
import { saveState } from "../../helpers/saveState";

export const userMiddleware = (store) => (next) => (action) => {
    next(action);

    if (init.match(action)) {
        const users = loadState("users");
        const currentUser = loadState("currentUser");
        store.dispatch(
            setup({
                users,
                currentUser,
            })
        );
    }

    if (signup.match(action)) {
        const users = store.getState().user.users;
        saveState("users", users);
    }

    if (signin.match(action) || signout.match(action)) {
        const currentUser = store.getState().user.currentUser;
        saveState("currentUser", currentUser);
    }
};
