import React from "react";
import { Link } from 'react-router-dom';
import photo from '../../../app/assets/images/seed/22.jpg'

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
                            <li key={photo.id}><img src={photo.photoUrl}/><sub>{photo.description}</sub></li>
                        );
                })}
                </ul>
            );

        } else {
            
            return (
                <div className="horizontal-feed-container">
                    <div className="horizontal-feed">
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div><div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div><div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div><div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div><div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">A cheetah</sub>
                        </div>
                    </div>
                </div>
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
                    <h1 className="feed-title">Your Recent Activity</h1>
                    <div className="feed">
                        <div className="feed-container">
                            {this.renderPhotos()}
                        </div>
                    </div>       
                    </div>       
                </div>
            )
    }
};

export default Feed;