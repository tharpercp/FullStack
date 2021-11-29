import React from 'react';
import { connect } from 'react-redux';
import Feed from './feed';

const mSTP = () => ({
  
});

const mDTP = dispatch => ({
  resetErrors: () => dispatch(resetSessionErrors()),
  logout: () => dispatch(logout())
});

export default connect(null, mDTP)(Feed);