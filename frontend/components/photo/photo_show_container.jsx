import React from 'react';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo';
import { postLike, destroyLike } from '../../actions/like'
import PhotoShow from './photo_show';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.currentUser],
});

const mDTP = (dispatch) => ({
    postPhoto: photo => dispatch(createPhoto(photo)),
    like: photoId => dispatch(postLike(photoId)),
    unLike: photoId => dispatch(destroyLike(photoId))
})

export default connect(mSTP, mDTP)(PhotoShow);