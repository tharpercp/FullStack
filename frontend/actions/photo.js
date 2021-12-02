import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";

const receiveAllPhotos = (photos) => ({
    type: RECEIVE_ALL_PHOTOS,
    photos
})

export const fetchAllPhotos = () => (dispatch) => {
    return PhotoAPIUtil.fetchAllPhotos()
        .then((photos) => dispatch(receiveAllPhotos(photos));
};

export const fetchAllUserPhotos = user => dispatch => {
    
}
