export const postPhoto = photo => (
    $.ajax({
        url: 'api/photo',
        method: 'POST',
        data: { photo },
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
