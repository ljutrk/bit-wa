import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onClick, isViewList, refresh, searchValueChange, searchValue, goToAbout, aboutPageState }) => {

    const changeIcon = () => {
        if (isViewList) {
            return "view_module"
        } else {
            return "view_list"
        }
    }

    const aboutPage = () => {
        console.log("headerpagestate",aboutPageState);
        
        if (aboutPageState) {
            return (<ul className="right hide-on-med-and-down">
                <li><Link onClick={goToAbout} to='/about'>About</Link></li>
                <li><a href="badges.html" onClick={onClick}><i className="material-icons">{changeIcon()}</i></a></li>
                <li><a href="http://localhost:3000/" onClick={refresh}><i className="material-icons">refresh</i></a></li>
            </ul>
            )
        } else {
            return
        }
    }


    return (
        <nav>
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo center">Bit People</Link>
                <ul className="right hide-on-med-and-down">
                    {aboutPage()}
                </ul>
            </div>
        </nav>
    )
}

export { Header };