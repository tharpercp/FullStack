import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";

const receiveAllPhotos = (photos) => ({
    type: RECEIVE_ALL_PHOTOS,
    photos
})

const receivePhoto = (photo) => ({
    type: RECEIVE_PHOTO,
    photo
})

export const fetchAlbumPhotos = (userId, albumId) => (dispatch) => {
    return PhotoAPIUtil.fetchAlbumPhotos(userId, albumId)
        .then((photos) => dispatch(receiveAllPhotos(photos)),
}

export const fetchUserPhotos = (userId) => (dispatch) => {
    return PhotoAPIUtil.fetchUserPhotos(userId)
        .then((photos) => dispatch(receiveAllPhotos(photos)),
}


export const fetchAllPhotos = () => (dispatch) => {
    return PhotoAPIUtil.fetchAllPhotos()
        .then((photos) => dispatch(receiveAllPhotos(photos));
};
