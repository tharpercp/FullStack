import { fetchPhotoLikes, createLike, deleteLike } from  "../utils/like_api_util"; 

export const RECEIVE_PHOTO_LIKES = "RECEIVE_PHOTO_LIKES";
export const RECEIVE_LIKE_DELETE ="RECEIVE_LIKE_DELETE";


const receivePhotoLikes = (likes) => ({
    type: RECEIVE_PHOTO_LIKES,
    likes
})

const receiveLikeDelete = (likes) => ({
    type: RECEIVE_LIKE_DELETE,
    likes
})

export const allLikes = (photoId) => dispatch => {
    return fetchPhotoLikes(photoId)
        .then(likes => dispatch(receivePhotoLikes(likes)));
};

export const postLike = (photoId) => (dispatch) => {
    return createLike(photoId)
        .then((likes) => dispatch(receivePhotoLikes(likes)));
};


export const destroyLike = (photoId) => (dispatch) => {
    return deleteLike(photoId)
        .then(likes => dispatch(receiveLikeDelete(likes)))
}