import React from 'react';
import { connect } from 'react-redux';
import Account from './account';
import { allComments } from '../../actions/comment';
import { logoutUser } from '../../actions/session';

const mSTP = (state) => ({
  photos: Object.values(state.entities.photos),
  currentUser: state.entities.users[state.session.currentUser]
});

const mDTP = dispatch => ({
  fetchAllComments: (photoId) => dispatch(allComments(photoId)),
  logout: () => dispatch(logoutUser())
});

export default connect(mSTP, mDTP)(Comment);