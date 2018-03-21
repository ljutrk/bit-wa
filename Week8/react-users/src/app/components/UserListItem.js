import React from 'react';
import PropTypes from "prop-types";

const UserListItem = ({ user }) => {
    const { gender,name, email, dob, picture } = user;

    const isGenderFemale = () => {
        if (gender === "female") {
            return "collection-item avatar  #ff5252 red accent-1"
        } else {
            return "collection-item avatar  #b2ff59 light-green accent-1"
        }
    }

    return (

        <ul className="collection">
            <li className={isGenderFemale()} >
                <img src={picture.large} alt="" className="circle" />
                <span className="title">{name.first} {name.last}</span>
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