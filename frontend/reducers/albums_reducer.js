import React from 'react';
import { RECEIVE_USER_ALBUMS, RECEIVE_ALBUM } from '../actions/album';

const albumReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_USER_ALBUMS:
            return action.albums;
        case RECEIVE_ALBUM:
            nextState[action.album.id] = action.album;
            return nextState;
        default:
            return oldState;
    }
};

export default albumReducer;