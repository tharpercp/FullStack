export const postPhoto = photo => (
    $.ajax({
        url: 'api/photo',
        method: 'POST',
        data: { photo },
    })
);