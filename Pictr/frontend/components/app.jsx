import React from "react";
import SignupContainer from './session/signup_container';
import { Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import LoginContainer from './session/login_container';


const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/" component={LoginContainer} />
            <AuthRoute path="/signup" component={SignupContainer}/>
        </Switch>
    </div>
); 

export default App; 