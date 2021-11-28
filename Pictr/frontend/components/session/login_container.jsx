import React from 'react';
import { connect } from 'react-redux';
import { loginUser, resetSessionErrors } from '../../actions/session';
import loginForm from './login_form';

const mSTP = ({ errors }) => ({
    errors: errors
});

const mDTP = dispatch => ({
  processForm: formUser => dispatch(loginUser(formUser)),
  resetErrors: () => dispatch(resetSessionErrors())
});

export default connect(mSTP, mDTP)(loginForm);
