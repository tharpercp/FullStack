import SignupContainer from './session/signup_container';
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import LoginContainer from './session/login_container';


export default () => (
    <div>
        <ProtectedRoute path="/feed" component={NavBarContainer} />
        <ProtectedRoute path="/feed" component={PhotoContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
    </div>
);
