import React from 'react';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/session';
import Photo from './photo_index'

const mSTP = () => ({
  
});

const mDTP = dispatch => ({
  resetErrors: () => dispatch(resetSessionErrors()),
  postPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(null, mDTP)(Photo);