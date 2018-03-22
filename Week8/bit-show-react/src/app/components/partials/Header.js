import React from 'react';

const Header = () => {
    return (
        <nav id="main-nav" className="navbar justify-content-between">
        <div className="container">
            <a className="navbar-brand">BitShow</a>
            <form className="form-inline">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <ul className="search-results"></ul>
            </form>
        </div>
    </nav>
    );
}

export { Header };