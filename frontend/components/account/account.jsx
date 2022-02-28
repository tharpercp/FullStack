import React from 'react';
import EmptyNav from '../nav/empty_nav'
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




class Account extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            photos: true,
            albums: false,
            social: false,
            photosBG: "darkgrey",
            albumsBG: "white",
            socialBG: "white",
        }
    }

    componentDidMount () {
        this.props.fetchAllPhotos();
    }


    renderPhotos () {
        if (this.state.photos && !this.state.albums && !this.state.social) {
            return (
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
            )
        } else if (this.state.albums && !this.state.photos && !this.state.social) {
            return (
                <div className="horizontal-feed">
                    No Albums Yet
                </div>
            )
        } else {
            return (
                <div className="account-social">No social stats yet</div>
            )
        }
    }

    togglePhotos () {
        this.setState({photos: true, albums: false, social: false})
        if (this.state.photosBG === "white") {
            this.setState({photosBG: "darkgrey", albumsBG: "white", socialBG: "white"})
        } else {
            this.setState({photosBG: "white"})
        }
    }

    toggleAlbums () {
        this.setState({albums: true, photos: false, social: false })
        if (this.state.albumsBG === "white") {
            this.setState({albumsBG: "darkgrey", photosBG: "white", socialBG: "white"})
        } else {
            this.setState({albumsBG: "white"})
        }
    }

    toggleSocial () {
        this.setState({social: true, photos: false, albums: false })
        if (this.state.socialBG === "white") {
            this.setState({socialBG: "darkgrey", albumsBG: "white", photosBG: "white"})
        } else {
            this.setState({socialBG: "white"})
        }
    }

    render () {
        return (
            <div className="account-container">
                <EmptyNav />
                <div className="account-options-container">
                    <ul className="account-options">
                        <li className="account-option" onClick={() => this.togglePhotos()} style={{backgroundColor: this.state.photosBG}}>Photos</li>
                        <li className="account-option" onClick={() => this.toggleAlbums() } style={{backgroundColor: this.state.albumsBG}}>Albums</li>
                        <li className="account-option" onClick={() => this.toggleSocial()} style={{backgroundColor: this.state.socialBG}}>Social</li>
                    </ul>
                </div>
                <div className="account-photos-display">
                    {this.renderPhotos()}
                </div>
            </div>
        )
    }
}

export default Account;