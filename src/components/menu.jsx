import React from "react";
import {Link} from 'react-router-dom';

const Menu = () => {

    return (
        <>
        <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/create">Create new Data</Link></li>
            <li><Link to="/update">Update</Link></li>
        </ul>
        </>
    )
}

export default Menu;