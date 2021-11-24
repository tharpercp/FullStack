import { 
    signup,
    login,
    logout
} from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors,
});

const clearErrors = () => ({
    type: RESET_SESSION_ERRORS
});

export const createNewUser = formUser => dispatch => {
    return signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const loginUser = formUser => dispatch => {
    return login(formUser)
        .then(user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const logoutUser = () => dispatch => 
    logout()
        .then(() => dispatch(logoutCurrentUser()));

export const resetSessionErrors = () => dispatch => {
    dispatch(clearErrors());
};