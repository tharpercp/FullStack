import React from "react";
import SignupContainer from './session/signup_container';
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import LoginContainer from './session/login_container';


const App = () => (
    <div>
        <AuthRoute path="/sessionform" component={LoginContainer, SignupContainer} />
        {/* <ProtectedRoute path="/feed" component={NavBarContainer} />
        <ProtectedRoute path="/feed" component={PhotoContainer} /> */}
    </div>
); 

export default App; 