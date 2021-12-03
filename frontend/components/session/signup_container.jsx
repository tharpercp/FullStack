import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import signupForm from './signup_form';

const mSTP = ({ errors }) => ({
    errors: errors,
});


const mDTP = dispatch => ({
    processForm: formUser => dispatch(createNewUser(formUser)),
});

export default connect(mSTP, mDTP)(signupForm);