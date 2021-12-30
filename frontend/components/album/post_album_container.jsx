import React from 'react';
import { connect } from 'react-redux';
import PostAlbum from './post_album';
import { allUserAlbums, createAlbum } from '../../actions/album';


const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.currentUser],
});

const mDTP = dispatch => ({
  createAlbum: (album) => dispatch(createAlbum(album))
});

export default connect(mSTP, mDTP)(PostAlbum);