import React from 'react';
import { connect } from 'react-redux';
import Feed from './feed';

const mSTP = (state) => ({
  // photos: Object.values(state.entities.photos),
  currentUser: state.entities.users[state.session.currentUser]
});

const mDTP = dispatch => ({
    
});

export default connect(mSTP, mDTP)(Feed);