import { connect } from 'react-redux';
import { createNewUser, resetSessionErrors, loginUser } from '../../actions/session';
import signupForm from './signup_form';

const mSTP = ({ errors }) => ({
    errors: errors,
});


const mDTP = dispatch => ({
    processForm: formUser => dispatch(createNewUser(formUser)),
    loginUser: formUser => dispatch(loginUser(formUser)),
    resetErrors: () => dispatch(resetSessionErrors())
});

export default connect(mSTP, mDTP)(signupForm);