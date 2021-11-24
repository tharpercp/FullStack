import React from 'react';
import { connect } from 'react-redux';
import { login, resetSessionErrors } from '../../actions/session';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  errors: errors,
  formType: 'Sign In'
});

const mDTP = dispatch => ({
  processForm: formUser => dispatch(login(formUser)),
  resetErrors: () => dispatch(resetSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);
