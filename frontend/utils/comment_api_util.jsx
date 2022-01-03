export const postComment = (comment) => (
    $.ajax({
        method: "POST",
        url: `/api/photos/${comment.photo_id}/comments`
    })
);

export const fetchPhotoComments = (photo) => (
    $.ajax({
        method: 'GET',
        url: `/api/photos/${photo.id}/comments`
    })
);