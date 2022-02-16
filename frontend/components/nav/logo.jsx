import React from "react";
import { Link } from 'react-router-dom';
import photo from '../../../app/assets/images/seed/22.jpg'

class Logo extends React.Component {
    constructor(props){
        super(props);


    }

    render() {
        return (
            <div className="logo">
                <div className="first-dot"></div>
                <div className="second-dot"></div>
                <div className="logo-text">pictr</div>
            </div>
        )
    }
}

export default Logo