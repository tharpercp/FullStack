import React from "react";
import SignupContainer from './session/signup_container';
import { Switch, Route } from "react-router-dom";
import LoginContainer from './session/login_container';
import FeedContainer from './feed/feed_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

const App = () => (
    <div>
        <Switch>
            <Route exactly path="/" component={LoginContainer} />
            <Route exact path="/signup" component={SignupContainer}/>
            <Route path="/feed" component={FeedContainer} />
        </Switch>
    </div>
); 

export default App; 