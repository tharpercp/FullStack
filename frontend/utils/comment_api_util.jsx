export const fetchPhotoComments = (photoId) => (
    $.ajax({
        method: "GET",
        url: `/api/photos/${photoId}/comments`
    })
);

export const createComment = (comment) => (
    $.ajax({
        method: "POST",
        url: `/api/photo/${comment.photo_id}/comments`,
        data: {comment}
    })
);

export const editComment = (photoId, commentId, comment) => (
    $.ajax({
        method: "PATCH",
        url: `/api/photos/${photoId}/comments/${commentId}`,
        data: {comment}
    })
)

export const deleteComment = (photoId, commentId) => (
    $.ajax({
        method: "DELETE",
        url:`/api/photos/${photoId}/comments/${commentId}`
    })
)

