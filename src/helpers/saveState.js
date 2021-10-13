export const saveState = (name, state) => {
    try {
        // const data = JSON.stringify(state);
        localStorage.setItem(name, JSON.stringify(state));
    } catch (err) {
        console.log(err);
    }
};
