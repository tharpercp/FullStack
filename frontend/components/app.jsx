import React from "react";
import SignupContainer from './session/signup_container';
import { Switch, Route } from "react-router-dom";
import LoginContainer from './session/login_container';
import FeedContainer from './feed/feed_container';
import PhotoContainer from './photo/photo_index_container';

const App = () => (
    <div>
        <Switch>
            <Route path="/signup" component={SignupContainer}/>
            <Route path="/feed" component={FeedContainer} />
            <Route path="/photo/new" component={PhotoContainer} />
            <Route exactly path="/" component={LoginContainer} />
            {/* <Route render={() => <Redirect to={{ pathname: "/" }} />} /> Work on making default route here */}
        </Switch>
    </div>
); 

export default App; 