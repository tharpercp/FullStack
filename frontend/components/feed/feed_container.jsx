import React from 'react';
import { connect } from 'react-redux';
import Feed from './feed';
import { logoutUser } from '../../actions/session';

const mSTP = () => ({
  
});

const mDTP = dispatch => ({
  resetErrors: () => dispatch(resetSessionErrors()),
  logout: () => dispatch(logoutUser())
});

export default connect(null, mDTP)(Feed);