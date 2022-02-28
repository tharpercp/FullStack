import React from "react";
import Logo from './logo'
import { Link } from 'react-router-dom';

class EmptyNav extends React.Component {
    constructor(props){
        super(props);


    }

    render() {
        return (
                <div className="navbar">
                    <Link to="/feed" style={{backgroundColor: "black"}}><Logo /></Link>
                </div>
        )
    }
}

export default EmptyNav;