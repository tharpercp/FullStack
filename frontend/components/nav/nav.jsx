import React from "react";
import { Link } from 'react-router-dom';
import Logo from './logo'

class Nav extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            account: 'hidden',
            photos: 'hidden',
            albums: 'hidden'
        }


    }

    render() {
        return (
                <div className="navbar">
                    <Link to="/feed" style={{backgroundColor: "black"}}><Logo /></Link>
                    <ul className="navlink">
                        <Link to="/account"><li className="navlink-open">Account</li></Link>
                    </ul>
                    <ul className="navlink">
                        <li className="navlink-open">Create</li>
                    </ul>
                    <ul className="navlink">
                        <li className="navlink-open">Browse</li>
                    </ul>
                    <div className="navlink" alt="logout" onClick={() => this.props.logout()}>↩</div>
                </div>
        )
    }
}

export default Nav;