import { 
    signup,
    login,
    logout,
    postPhoto,
} from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

const receivePhoto = photo => ({
    type: RECEIVE_PHOTO,
    photo,
})

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
});

const clearErrors = () => ({
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

export const createPhoto = photo => dispatch => {
    return  postPhoto(photo)
        .then(photo => dispatch(receivePhoto(photo)));
};