import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors,
    formType: 'Sign Up'
});


const mDTP = dispatch => ({
    processForm: formUser => dispatch(createNewUser(formUser)),
    login: formUser => dispatch(login(formUser)),
    resetErrors: () => dispatch(resetSessionErrors())
});

export default connect(mSTP, mDTP)(CreateSessionForm);