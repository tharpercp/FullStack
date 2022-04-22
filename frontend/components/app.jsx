import React from "react";
import SignupContainer from './session/signup_container';
import { Switch, Route } from "react-router-dom";
import LoginContainer from './session/login_container';
import FeedContainer from './feed/feed_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import PostPhotoContainer from "./photo/post_photo_container";
import AccountContainer from "./account/account_container"
import PhotoShowContainer from './photo/photo_show_container'

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer}/>
            <ProtectedRoute path="/feed" component={FeedContainer} />
            <ProtectedRoute path="/create" component={PostPhotoContainer} />
            <ProtectedRoute path="/account" component={AccountContainer} />
            <ProtectedRoute path="/photo/1232098239" component={PhotoShowContainer} />
        </Switch>
    </div>
); 

export default App; 