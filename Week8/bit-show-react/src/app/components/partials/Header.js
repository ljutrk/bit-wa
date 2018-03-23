import React from 'react';
import { Link } from 'react-router-dom'
import { Search } from './Search';

const Header = ({shows, clickFromSearch}) => {
    
    return (
        <nav id="main-nav" className="navbar justify-content-between">
        <div className="container">
            <Link to='/' className="navbar-brand">BitShow</Link>
                <Search shows={shows} clickFromSearch={clickFromSearch} />
        </div>
    </nav>
    );
}

export { Header };