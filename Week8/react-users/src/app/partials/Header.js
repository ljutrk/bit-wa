import React from 'react';
import PropTypes from 'prop-types';


const Header = ({title}) => {

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{title}</a>
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