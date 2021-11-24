import React from 'react';
import { connect } from 'react-redux';
import Feed from './feed/feed';

const mSTP = () => ({
  
});

const mDTP = dispatch => ({
  resetErrors: () => dispatch(resetSessionErrors())
});

export default connect(null, mDTP)(Feed);