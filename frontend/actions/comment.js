import { fetchPhotoComments, createComment, editComment, deleteComment } from  "../utils/comment_api_util"; 

export const RECEIVE_PHOTO_COMMENTS = "RECEIVE_PHOTO_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_DELETE ="RECEIVE_DELETE"
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receivePhotoComments = (comments) => ({
    type: RECEIVE_PHOTO_COMMENTS,
    comments
})

const receiveCommentDelete = (comments) => ({
    type: RECEIVE_COMMENT_DELETE,
    comments
})

const receiveCommentErrors = (errors) => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

export const allComments = (photoId) => dispatch => {
    return fetchPhotoComments(photoId)
        .then(comments => dispatch(receivePhotoComments(comments)));
};

export const postComment = (comment) => (dispatch) => {
    return createComment(comment)
        .then((comment) => dispatch(receiveComment(comment)),
            errors => dispatch(receiveCommentErrors(errors.responseJSON)));
};

export const changeComment = (commentId) => (dispatch) => {
    return editComment(commentId)
        .then((comment) => dispatch(receiveComment(comment)),
        errors => dispatch(receiveCommentErrors(errors.responseJSON)));
}

export const destroyComment = (commentId) => (dispatch) => {
    return deleteComment(commentId)
        .then(comments => dispatch(receiveCommentDelete(comments)))
}