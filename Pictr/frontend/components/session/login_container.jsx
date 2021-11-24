import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import SessionForm from './session_form';

const mSTP = () => ({
  formType: 'Log In'
});

const mDTP = dispatch => ({
  processForm: formUser => dispatch(login(formUser)),
});

export default connect(mSTP, mDTP)(SessionForm);
