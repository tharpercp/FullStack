import React from "react";


class Feed extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Home Feed</h2>
                <button onClick={() => this.props.logout()}>Log Out</button>
            </div>
        )
    }
};

export default Feed;