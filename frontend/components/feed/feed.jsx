import React from "react";
import { Link } from 'react-router-dom';


class Feed extends React.Component {
    constructor(props){
        super(props);

        this.renderErors = this.renderErrors.bind(this);

    }

    componentDidMount() {
        this.props.fetchAllPosts();
    }

    renderPhotos() {
        const photos = this.props.photos;
        if (photos.length > 0) {
            return(
                <ul className="photo-index">
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
                    <li><img className="logo" src="https://i.ibb.co/C7SG390/logo-blackbg.jpg"/></li>
                    <li><strong className="logo-text">pictr</strong></li>
                    <li className="navlink"><Link to="/photo/new" className="links">Photos</Link></li>
                    <li className="navlink"><Link to="/account" className="links">Account</Link></li>
                    <li className="navlink" onClick={() => this.props.logout()}><Link to="/" className="links">Logout</Link></li>
                    <li className="navlink">Albums</li>
                </ul>
                <div className="feed">
                    <h2>Activity Feed</h2>
                    <div className="feed-index">
                        {this.renderPhotos()}
                    </div>
                </div>
            </div>
        )
    }
};

export default Feed;