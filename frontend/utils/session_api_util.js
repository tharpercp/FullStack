export const signup = user => (
    $.ajax({
        url: 'api/users',
        method: 'POST',
        data: { user },
    })
);

export const login = user => (
    $.ajax({
        url: 'api/session',
        method: 'POST',
        data: { user },
    })
);

export const logout = () => (
    $.ajax({
        url: 'api/session',
        method: 'DELETE',
    })
);

export const postPhoto = photo => (
    $.ajax({
        url: 'api/photos',
        method: 'POST',
        data: { photo },
    })
);

export const fetchAllPhotos = userId => (
    $.ajax({
        url: 'api/photos',
        method: 'GET',
        data: { userId },
    })
);