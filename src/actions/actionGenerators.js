import { UPDATE_QUOUTE } from "./types";

function updateQuoute (quoute) {
    return {
        type: UPDATE_QUOUTE,
        quoute
    };
}

export const updateQuouteCreator = (dispatch) => {
    return (quoute) => {
        dispatch(updateQuoute(quoute));
    }
}