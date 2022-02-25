import React from "react";
import { Link } from 'react-router-dom';
import photo from '../../../app/assets/images/seed/22.jpg'
import a from '../../../app/assets/images/seed/23.jpg'
import b from '../../../app/assets/images/seed/24.jpg'
import c from '../../../app/assets/images/seed/25.jpg'
import d from '../../../app/assets/images/seed/26.jpg'
import e from '../../../app/assets/images/seed/27.jpg'
import f from '../../../app/assets/images/seed/28.jpg'
import g from '../../../app/assets/images/seed/29.jpg'
import h from '../../../app/assets/images/seed/30.jpg'
import i from '../../../app/assets/images/seed/31.jpg'
import j from '../../../app/assets/images/seed/32.jpg'
import k from '../../../app/assets/images/seed/33.jpg'
import l from '../../../app/assets/images/seed/34.jpg'
import m from '../../../app/assets/images/seed/35.jpg'
import n from '../../../app/assets/images/seed/36.jpg'
import o from '../../../app/assets/images/seed/37.jpg'
import p from '../../../app/assets/images/seed/38.jpg'
import q from '../../../app/assets/images/seed/39.jpg'
import r from '../../../app/assets/images/seed/40.jpg'


import NavContainer from '../nav/nav_container'

class Feed extends React.Component {
    constructor(props){
        super(props);

        


    }


    componentDidMount() {
        this.props.fetchAllPhotos();
    }

    renderRecentPosts() {
        return (

        <div className="horizontal-feed-container">
                    <div className="horizontal-update">
                        <div className="horizontal-update-item">
                            <img className="horizontal-feed-img" src={m}></img>
                            <div className="user-feed-info">
                                <div className="user-modal">T</div>
                                <div className="user-details">
                                    <div className="username">Tyler</div>
                                    <div className="member-since"> 45 photos | 2 Albums </div>
                                </div>
                
                            </div>
                        </div>
                        <div className="horizontal-update-item">
                            <img className="horizontal-feed-img" src={n}></img>
                            <div className="user-feed-info">
                                <div className="user-modal">A</div>
                                <div className="user-details">
                                    <div className="username">Alexandra</div>
                                    <div className="member-since"> 28 photos | 4 Albums </div>
                                </div>
                
                            </div>
                        </div>
                        <div className="horizontal-update-item">
                            <img className="horizontal-feed-img" src={o}></img>
                            <div className="user-feed-info">
                                <div className="user-modal">R</div>
                                <div className="user-details">
                                    <div className="username">Ricky</div>
                                    <div className="member-since"> 435 photos | 49 Albums </div>
                                </div>
                
                            </div>
                        </div>
                        <div className="horizontal-update-item">
                            <img className="horizontal-feed-img" src={p}></img>
                            <div className="user-feed-info">
                                <div className="user-modal">L</div>
                                <div className="user-details">
                                    <div className="username">Lucy</div>
                                    <div className="member-since"> 4 photos | 0 Albums </div>
                                </div>
                
                            </div>
                        </div>
                        <div className="horizontal-update-item">
                            <img className="horizontal-feed-img" src={q}></img>
                            <div className="user-feed-info">
                                <div className="user-modal">A</div>
                                <div className="user-details">
                                    <div className="username">Aldon</div>
                                    <div className="member-since"> 3 photos | 0 Albums </div>
                                </div>
                
                            </div>
                        </div>
                        <div className="horizontal-update-item">
                            <img className="horizontal-feed-img" src={r}></img>
                            <div className="user-feed-info">
                                <div className="user-modal">V</div>
                                <div className="user-details">
                                    <div className="username">Vicky</div>
                                    <div className="member-since"> 4556 photos | 22354 Albums </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )

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
                            <img className="horizontal-feed-img" src={photo} onClick={() => this.props.history.push("/photo/1232098239")}></img>
                            <sub className="horizontal-feed-item-text">2  💬    |    5  👍 </sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={a}></img>
                            <sub className="horizontal-feed-item-text">{Math.floor(Math.random() * 10)}  💬    |    {Math.floor(Math.random() * 10)}  👍</sub>
                        </div><div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={b}></img>
                            <sub className="horizontal-feed-item-text">{Math.floor(Math.random() * 10)}  💬    |    {Math.floor(Math.random() * 10)}  👍</sub>
                        </div><div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={c}></img>
                            <sub className="horizontal-feed-item-text">{Math.floor(Math.random() * 10)}  💬    |    {Math.floor(Math.random() * 10)}  👍</sub>
                        </div><div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={d}></img>
                            <sub className="horizontal-feed-item-text">{Math.floor(Math.random() * 10)}  💬    |    {Math.floor(Math.random() * 10)}  👍</sub>
                        </div><div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={e}></img>
                            <sub className="horizontal-feed-item-text">{Math.floor(Math.random() * 10)}  💬    |    {Math.floor(Math.random() * 10)}  👍</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={f}></img>
                            <sub className="horizontal-feed-item-text">{Math.floor(Math.random() * 10)}  💬    |    {Math.floor(Math.random() * 10)}  👍</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={photo}></img>
                            <sub className="horizontal-feed-item-text">{Math.floor(Math.random() * 10)}  💬    |    {Math.floor(Math.random() * 10)}  👍</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={g}></img>
                            <sub className="horizontal-feed-item-text">{Math.floor(Math.random() * 10)}  💬    |    {Math.floor(Math.random() * 10)}  👍</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={h}></img>
                            <sub className="horizontal-feed-item-text">{Math.floor(Math.random() * 10)}  💬    |    {Math.floor(Math.random() * 10)}  👍</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={i}></img>
                            <sub className="horizontal-feed-item-text">{Math.floor(Math.random() * 10)}  💬    |    {Math.floor(Math.random() * 10)}  👍</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={j}></img>
                            <sub className="horizontal-feed-item-text">{Math.floor(Math.random() * 10)}  💬    |    {Math.floor(Math.random() * 10)}  👍</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={k}></img>
                            <sub className="horizontal-feed-item-text">{Math.floor(Math.random() * 10)}  💬    |    {Math.floor(Math.random() * 10)}  👍</sub>
                        </div>
                        <div className="horizontal-feed-item">
                            <img className="horizontal-feed-img" src={l}></img>
                            <sub className="horizontal-feed-item-text">{Math.floor(Math.random() * 10)}  💬    |    {Math.floor(Math.random() * 10)}  👍</sub>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
                return (
                    <div className="home-page">
                        <NavContainer />
                        <h1 className="feed-title">Your Recent Posts</h1>
                        <div className="feed">
                            <div className="feed-container">
                                {this.renderPhotos()}
                            </div>
                        </div>
                        <h1 className="feed-title">Browse</h1>
                        <div className="browse">
                            <div className="browse-container">
                                {this.renderRecentPosts()}
                            </div>
                        </div>       
                    </div>       
                )
    }
};

export default Feed;