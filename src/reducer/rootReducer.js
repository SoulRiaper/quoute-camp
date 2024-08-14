import { UPDATE_QUOUTE } from "../actions/types";

export const rootReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_QUOUTE :
            return {
                ...state,
                quoute: action.quoute
            }
    }
}