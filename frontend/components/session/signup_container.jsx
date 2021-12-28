import { connect } from 'react-redux';
import { createNewUser, resetSessionErrors } from '../../actions/session';
import signupForm from './signup_form';

const mSTP = ({ errors }) => ({
    errors: errors,
});


const mDTP = dispatch => ({
    processForm: formUser => dispatch(createNewUser(formUser)),
    resetErrors: () => dispatch(resetSessionErrors()),
});

export default connect(mSTP, mDTP)(signupForm);