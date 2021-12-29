export const postPhoto = (photo, userId) => (
    $.ajax({
        url: `api/users/${userId}/photos`,
        method: 'POST',
        data: { photo },
        processData: false,
        contentType: false,
    })
);

export const fetchAllPhotos = () => (
    $.ajax({
        url: '/api/photos',
    })
);

export const fetchAllUserPhotos = userId => (
    $.ajax({
        url: `api/users/${userId}/photos`,
    })
);
