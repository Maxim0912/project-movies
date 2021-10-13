export const loadState = (name) => {
    try {
        const state = localStorage.getItem(name);
        if (state === null) {
            return undefined;
        }
        return JSON.parse(state);
    } catch (err) {
        return undefined;
    }
};
