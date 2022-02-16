import React from "react";
import { Link } from 'react-router-dom';
import Logo from './logo'

class Nav extends React.Component {
    constructor(props){
        super(props);


    }

    render() {
        return (
                <div className="navbar">
                    <Logo />
                    <div className="navlink">My Account</div>
                    <div className="navlink">Photos</div>
                    <div className="navlink">Albums</div>
                    <div className="navlink" onClick={() => this.props.logout()}>↩</div>
                </div>
        )
    }
}

export default Nav