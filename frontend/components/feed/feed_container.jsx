import React from 'react';
import { connect } from 'react-redux';
import Feed from './feed';
import { allPhotos } from '../../actions/photo';
import { logoutUser } from '../../actions/session';

const mSTP = (state) => ({
  photos: Object.values(state.entities.photos),
  currentUser: state.entities.users[state.session.currentUser]
});

const mDTP = dispatch => ({
  fetchAllPhotos: () => dispatch(allPhotos()),
  logout: () => dispatch(logoutUser())
});

export default connect(mSTP, mDTP)(Feed);