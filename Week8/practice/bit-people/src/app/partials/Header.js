import React from 'react';

const Header = ({ onClick, isViewList, refresh, searchValueChange, searchValue }) => {

    const changeIcon = () => {
        if (isViewList) {
            return "view_module"
        } else {
            return "view_list"
        }
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="http://localhost:3000/" className="brand-logo center">Bit People</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="badges.html" onClick={onClick}><i className="material-icons">{changeIcon()}</i></a></li>
                    <li><a href="http://localhost:3000/" onClick={refresh}><i className="material-icons">refresh</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export { Header };