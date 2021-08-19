import { TOGGLE_THEME } from "../types";

const globalReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return action.payload
        default:
            return state;
    }
}

export default globalReducer;