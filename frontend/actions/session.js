import { 
    signup,
    login,
    logout,
} from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
});

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
});

export const createNewUser = formUser => dispatch => {
    return signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const loginUser = formUser => dispatch => {
    return login(formUser)
        .then(user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const logoutUser = () => dispatch => {
    return logout()
        .then(() => dispatch(logoutCurrentUser()));
};

export const resetSessionErrors = () => dispatch => {
    dispatch(clearErrors());
};

