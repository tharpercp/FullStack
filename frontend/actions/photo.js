export const createPhoto = photo => dispatch => {
    return  postPhoto(photo)
        .then(photo => dispatch(receivePhoto(photo)));
};

