import React from "react";
import { RECEIVE_ALL_PHOTOS } from "../actions/photo";

const photosReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_ALL_PHOTOS:
            return action.photos;
        default:
            return oldState;
    }
};

export default photosReducer;