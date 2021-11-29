import React from "react";
import { Link } from 'react-router-dom';


class Photo extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className="photo-page">
                <ul className="navbar">
                    <li><img id="logo" src="https://i.ibb.co/C7SG390/logo-blackbg.jpg"/><strong>pictr</strong></li>
                    <li className="navlink"><Link to="/feed" className="links">Home</Link></li>
                    <li className="navlink"><Link to="/account" className="links">Account</Link></li>
                    <li className="navlink"><Link to="/" className="links">Logout</Link></li>
                </ul>
                <div className="upload-photo">
                    <h2>Upload a photo</h2>
                    <button>Submit Photo and Post</button>
                </div>
                <div className="photo-options">
                    <ul className="photo-options-list">
                        <li><button>Add a tag</button></li>
                        <li><button>Add some context</button></li>
                        <li><button>Add to an Album</button></li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default Photo;