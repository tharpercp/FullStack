import { postComment, fetchPhotoComments } from "../utils/comment_api_util"; 

export const RECEIVE_PHOTO_COMMENTS = "RECEIVE_PHOTO_COMMENTS";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receivePhotoComments = (comments) => ({
    type: RECEIVE_ALL_ALBUMS,
    comments
})

const receiveCommentErrors = (errors) => ({
    type: RECEIVE_ALBUM_ERRORS,
    errors
})

const receiveComment = (comment) => ({
    type: RECEIVE_ALBUM,
    comment
})

export const createComment = (comment) => dispatch => {
    return postComment(comment)
        .then((comment) => dispatch(receiveComment(comment)),
            errors => dispatch(receiveCommentErrors(errors.responseJSON)));
};

export const fetchAllPhotoComments = (photo) => dispatch => {
    return fetchPhotoComments(photo)
        .then((comments) => dispatch(receivePhotoComments(comments)))
};