import React from 'react';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo';
import PostPhoto from './post_photo';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.currentUser],

});

const mDTP = (dispatch) => ({
    postPhoto: photo => dispatch(createPhoto(photo)),
})

export default connect(mSTP, mDTP)(PostPhoto);