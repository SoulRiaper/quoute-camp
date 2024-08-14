import { UPDATE_QUOUTE } from "./types";

function updateQuoute (quoute) {
    return {
        type: UPDATE_QUOUTE,
        quoute
    };
}

export const updateQuouteInStore = (dispatch) => {
    return (quoute) => {
        dispatch(updateQuoute(quoute));
    }
}