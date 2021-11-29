import React from "react";
import { Link } from 'react-router-dom';


class Feed extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="home-page">
                <ul className="navbar">
                    <li><img id="logo" src="https://i.ibb.co/C7SG390/logo-blackbg.jpg"/><strong>pictr</strong></li>
                    <li className="navlink"><Link to="/photo" className="links">Photos</Link></li>
                    <li className="navlink"><Link to="/account" className="links">Account</Link></li>
                    <li className="navlink"><Link to="/" className="links">Logout</Link></li>
                </ul>
                <div className="feed">
                    <h2>Activity feed under construction</h2>
                    <img className="construction" src="https://media.istockphoto.com/vectors/vector-construction-cone-with-helmet-vector-id979122994?b=1&k=20&m=979122994&s=612x612&w=0&h=DNHwN6cCrfmaAoXsNkPXInZQnu-8xOGexKrYe86b7iM="></img>
                </div>
            </div>
        )
    }
};

export default Feed;