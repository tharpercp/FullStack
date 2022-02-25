export const fetchPhotoLikes = (photoId) => (
    $.ajax({
        method: "GET",
        url: `/api/photos/${photoId}/likes`
    })
);

export const createLike = (comment) => (
    $.ajax({
        method: "POST",
        url: `/api/photos/${comment.photo_id}/likes`,
        data: {comment}
    })
);

export const deleteLike = (photoId, likeId) => (
    $.ajax({
        method: "DELETE",
        url:`/api/photos/${photoId}/likes/${likeId}`
    })
)
