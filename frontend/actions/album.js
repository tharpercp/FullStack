import { fetchUserAlbums, fetchAlbum, createAlbum, fetchAllAlbums } from "../utils/album_api_util"; 

export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

const receiveAllAlbums = (albums) => ({
    type: RECEIVE_ALL_ALBUMS,
    albums
})

const receiveAlbumErrors = (errors) => ({
    type: RECEIVE_ALBUM_ERRORS,
    errors
})

const receiveAlbum = (album) => ({
    type: RECEIVE_ALBUM,
    album
})

export const allAlbums = () => dispatch => {
    return fetchAllAlbums()
        .then(albums => dispatch(receiveAllAlbums(albums)));
};

export const allUserAlbums = (id) => dispatch => {
    return fetchUserAlbums(id)
        .then(albums => dispatch(receiveAllPhotos(albums)));
};

export const createAlbum = (album) => (dispatch) => {
    return createAlbum(album)
        .then((album) => dispatch(receiveAlbum(album)),
            errors => dispatch(receiveAlbumErrors(errors.responseJSON)));
};

export const showAlbum = (albumId) => (dispatch) => {
    return fetchAlbum(albumId)
        .then((album) => dispatch(receiveAlbum(album)));
}