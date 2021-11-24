import React from "react";
import SignupContainer from './session/signup_container';
import { Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import LoginContainer from './session/login_container';
import Feed from './feed/feed';


const App = () => (
    <div>
        <Switch>
            <Route path="/" component={LoginContainer} />
            <AuthRoute path="/signup" component={SignupContainer}/>
            <ProtectedRoute path="/feed" component={Feed} />
        </Switch>
    </div>
); 

export default App; 