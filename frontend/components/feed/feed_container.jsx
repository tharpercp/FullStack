import React from 'react';
import { connect } from 'react-redux';
import Feed from './feed';
import { fetchAllPhotos } from '../../actions/photo';

const mSTP = (state) => ({
  photos: Object.values(state.entities.photos)
});

const mDTP = dispatch => ({
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
});

export default connect(mSTP, mDTP)(Feed);