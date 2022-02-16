import React from "react";
import Logo from './logo'

class EmptyNav extends React.Component {
    constructor(props){
        super(props);


    }

    render() {
        return (
                <div className="navbar">
                    <Logo />
                </div>
        )
    }
}

export default EmptyNav;