import React from 'react';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/session';
import Photo from './photo_index'

const mSTP = (state) => ({
  photos: Object.values(state.entities.photos)
});

const mDTP = dispatch => ({
  fetchAllPhotos: () => dispatch(fetchAllPhotos())
});

export default connect(null, mDTP)(Photo);