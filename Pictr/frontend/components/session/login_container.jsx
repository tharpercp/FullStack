import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'login'
});

const mDTP = dispatch => ({
  login: formUser => dispatch(login(formUser)),
});

export default connect(mSTP, mDTP)(SessionForm);
