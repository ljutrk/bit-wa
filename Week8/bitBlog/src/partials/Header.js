import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper #0277bd light-blue darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo">RND BLG</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/authors'>Authors</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export { Header }