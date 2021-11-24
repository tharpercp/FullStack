import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, RESET_SESSION_ERRORS } from "../actions/session";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RESET_SESSION_ERRORS:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
};