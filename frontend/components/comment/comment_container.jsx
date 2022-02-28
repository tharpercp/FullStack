import React from 'react';
import { connect } from 'react-redux';
import { allComments } from '../../actions/comment';
import { logoutUser } from '../../actions/session';

const mSTP = (state, ownProps) => ({
  photos: Object.values(state.entities.photos),
  currentUser: state.entities.users[state.session.currentUser],
  photoId: ownProps.photoId
});

const mDTP = dispatch => ({
  fetchAllComments: (photoId) => dispatch(allComments(photoId)),
  logout: () => dispatch(logoutUser())
});

export default connect(mSTP, mDTP)(Comment);