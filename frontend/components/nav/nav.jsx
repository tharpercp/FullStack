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
                        <li className="navlink">Account</li>
                        <li className="navlink-hidden">Photos</li>
                        <li className="navlink-hidden">Albums</li>
                        <li className="navlink-hidden">Comments</li>
                        <li className="navlink-hidden">Tags</li>
                    </ul>
                    <ul className="navlink">
                        <li className="navlink">Photos</li>
                        <li className="navlink-hidden">Post New Photo</li>
                        <li className="navlink-hidden">Edit Your Photos</li>
                        <li className="navlink-hidden">Browse Other's Photos</li>
                    </ul>
                    <ul className="navlink">
                    <li className="navlink">Albums</li>
                        <li className="navlink-hidden">Post New Album</li>
                        <li className="navlink-hidden">Edit Your Albums</li>
                        <li className="navlink-hidden">Browse Other's Albums</li>
                    </ul>
                    <div className="navlink" alt="logout" onClick={() => this.props.logout()}>↩</div>
                </div>
        )
    }
}

export default Nav;