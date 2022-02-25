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
                    <Logo onClick={ () => this.props.history.push("/feed")}/>
                    <ul className="navlink">
                        <li className="navlink-open">Account</li>
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