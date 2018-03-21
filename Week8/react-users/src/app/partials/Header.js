import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom"


const Header = (props) => {
    const { title, onClick, isListView, refresh } = props;


    const changeIcon = () => {
        if (isListView) {
            return "view_module"
        } else {
            return "view_list"
        }
    }

    const linkList =()=>{
        return(
            <ul className="right hide-on-med-and-down">
            <li><Link to="/about">About</Link></li>
            <li><a href="badges.html" onClick={onClick}><i className="material-icons">{changeIcon()}</i></a></li>
            <li><a href="collapsible.html" onClick={refresh}><i className="material-icons">refresh</i></a></li>
        </ul>
        )
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{title}</a>
               {linkList()}
            </div>
        </nav>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: "Juzeri!"
}

export {
    Header
}