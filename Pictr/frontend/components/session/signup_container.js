import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup'
});


const mDTP = dispatch => ({
    processForm: formUser => dispatch(createNewUser(formUser))
});

export default connect(mSTP, mDTP)(SessionForm);