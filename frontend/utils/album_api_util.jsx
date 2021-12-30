export const fetchUserAlbums = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}/albums`
    })
);

export const fetchAlbum = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/albums/${id}`
    })
);

export const createAlbum = (album) => (
    $.ajax({
        method: "POST",
        url: `/api/albums`,
        data: {album}
    })
);