import { fetchAllPhotos, fetchAllUserPhotos } from "../utils/photo_api_util"; 

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";

const receiveAllPhotos = (photos) => ({
    type: RECEIVE_ALL_PHOTOS,
    photos
})

export const allPhotos = () => dispatch => {
    return fetchAllPhotos()
        .then(photos => dispatch(receiveAllPhotos(photos)));
};

export const allUserPhotos = () => dispatch => {
    return fetchAllUserPhotos()
        .then(photos => dispatch(receiveAllPhotos(photos)));
};

