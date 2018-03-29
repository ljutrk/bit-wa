import React, { Fragment } from 'react';
import { withRouter, Link } from "react-router-dom";
import M from 'materialize-css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarClose: true
        }
    } 

    openSideNav = () => {
        const elem = document.querySelector('.sidenav');
        const sideNav = M.Sidenav.init(elem, {
            closeOnClick: true
        })
        sideNav.open();
    }

    render() {
        return (
            <Fragment>
                <nav className="nav-extended #039be5 light-blue darken-1">
                    <div className="nav-wrapper container">
                        <Link to='/' className="brand-logo">BitBook</Link>
                        <a onClick={this.openSideNav} data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li className={(this.props.history.location.pathname === "/") ? "active" : ""}><Link to="/">Feed</Link></li>
                            <li className={(this.props.history.location.pathname === "/people") ? "active" : ""}><Link to="/people">People</Link></li>
                            <li className={(this.props.history.location.pathname === "/profile") ? "active" : ""}><Link to="/profile">Profile</Link></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a className="sidenav-close" id="feed" href="#/">Feed</a></li>
                    <li><a className="sidenav-close" id="people" href="#/people">People</a></li>
                    <li><a className="sidenav-close" id="profile" href="#/profile">Profile</a></li>
                </ul>
            </Fragment>

        )
    }
}
export default withRouter(Header);
