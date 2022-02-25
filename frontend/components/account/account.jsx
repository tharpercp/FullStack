import React from 'react';


class Account extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            photos: true,
            albums: false,
            social: false,
        }
    }

    componentDidMount () {
        this.props.fetchAllPhotos();
    }

    render () {
        return (
            <div className="account-container">
                <div className="account-options-container">
                    <ul className="account-options">
                        <li className="photos-option">Photos</li>
                        <li className="albums-option">Albums</li>
                        <li className="social-option">Social</li>
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