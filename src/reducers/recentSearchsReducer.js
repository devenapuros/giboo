/* eslint-disable indent */
import { recentSearchsActions } from "../Actions/recentSearchsActions";

const addRecentSearch = (state, action) => {
    return state;
};

const removeRecentSearch = (state, action) => {
    return state;
};

export const recentSearchsReducer = (state, action) => {
    switch (action.type) {
        case recentSearchsActions.ADD_SEARCH:
            return addRecentSearch(state, action); // todo: completar esta accion
        case recentSearchsActions.REMOVE_SEARCH:
            return removeRecentSearch(state, action); // todo: completar esta accion
        default:
            console.log("default");
            return state;
    }
};
