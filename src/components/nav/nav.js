import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './nav.scss'
class Nav extends Component {
    state = {  }
    render() {
        return (
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/products">
                        <li>Products</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/profile">
                        <li>Profile</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;