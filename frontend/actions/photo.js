import { fetchAllPhotos, fetchAllUserPhotos, postPhoto } from "../utils/photo_api_util"; 

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

const receiveAllPhotos = (photos) => ({
    type: RECEIVE_ALL_PHOTOS,
    photos
})

const receivePhotoErrors = (errors) => ({
    type: RECEIVE_PHOTO_ERRORS,
    errors
})

const receivePhoto = (photo) => ({
    type: RECEIVE_PHOTO,
    photo
})

export const allPhotos = () => dispatch => {
    return fetchAllPhotos()
        .then(photos => dispatch(receiveAllPhotos(photos)));
};

export const allUserPhotos = () => dispatch => {
    return fetchAllUserPhotos()
        .then(photos => dispatch(receiveAllPhotos(photos)));
};

export const createPhoto = (photo) => (dispatch) => {
    return postPhoto(photo)
        .then((photo) => dispatch(receivePhoto(photo)),
            errors => dispatch(receivePhotoErrors(errors.responseJSON)));
};

