import React from "react";
import SignupContainer from './session/signup_container';
import { Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import LoginContainer from './session/login_container';
import FeedContainer from './feed/feed_container';


const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={LoginContainer} />
            <AuthRoute path="/signup" component={SignupContainer}/>
            <Route path="/feed" component={FeedContainer} />
        </Switch>
    </div>
); 

export default App; 