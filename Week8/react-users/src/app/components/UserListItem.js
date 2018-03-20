import React from 'react';
import PropTypes from "prop-types";

const UserListItem = ({ user }) => {
    const { name, email, dob, picture } = user;

    return (

        <ul className="collection">
            <li className="collection-item avatar" >
                <img src={picture.large} alt="" className="circle" />
                <span className="title">{name.last} {name.first}</span>
                <p>  <i className="tiny material-icons">email</i> email: {user.hideEmailAddress(email)} <br />
                    <i className="tiny material-icons"> cake</i> {user.getDateOfBirth(dob)}
                </p>
            </li>
        </ul>
    )
}

UserListItem.propTypes = {
    user: PropTypes.object.isRequired
}

export { UserListItem };