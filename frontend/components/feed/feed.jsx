import React from "react";
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


class Feed extends React.Component {
    constructor(props){
        super(props);


    }

    componentDidMount() {
        this.props.fetchAllPhotos();
    }

    renderPhotos() {
        const photos = this.props.photos;
        if (photos.length > 0) {
            return(
                <ul className="images">
                    {photos.map(photo => {
                        return(
                            <li key={photo.id}><img src={photo.photoUrl}/></li>
                        );
                })}
                </ul>
            );
        } else {
            return (
                <h6>No Recent Activity</h6>
            )
        }
    }

    render() {
            return (
                <div className="home-page">
                    <ul className="navbar">
                        <li><div className="first-dot"></div></li>
                        <li><div className="second-dot"></div></li>
                        <li><div className="logo-text">pictr</div></li>
                        <Link className="navlink" to="/create">Photo</Link>
                        <li className="navlink">Account</li>
                        <li className="navlink">Albums</li>
                        <li className="navlink" onClick={() => this.props.logout()}>Logout</li>
                    </ul>
                    <div className="feed">
                        {this.renderPhotos()}
                    </div>       
                </div>
            )
    }
};

export default Feed;