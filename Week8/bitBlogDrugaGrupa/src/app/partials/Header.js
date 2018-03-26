import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <nav className="#039be5 light-blue darken-1">
            <div className="nav-wrapper container">
                <Link to='/' className="brand-logo">BitBlog</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export { Header };