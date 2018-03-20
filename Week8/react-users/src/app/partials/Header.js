import React from 'react';
import PropTypes from 'prop-types';


const Header = (props) => {
    const { title, onClick, isListView } = props;


    const changeIcon = () => {
        if (isListView) {
            return "view_module"
        } else {
            return "view_list"
        }
    }


    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{title}</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="badges.html" onClick={onClick}><i className="material-icons">{changeIcon()}</i></a></li>
                    <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                </ul>
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