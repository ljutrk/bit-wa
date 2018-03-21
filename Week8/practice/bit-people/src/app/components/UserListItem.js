import React from 'react';

const UserListItem = ({user}) => {
    
    const isFemale = () => {
        if (user.gender === "female") {
            return "collection-item avatar #ffebee red lighten-5"
        } else {
            return "collection-item avatar"
        }
    }

    return (
        <ul className="collection">
            <li className={isFemale()}>
                <img src={user.picture} alt="" className="circle" />
                <span className="title">{user.firstName} {user.lastName}</span>
                <p><i className="tiny material-icons">email</i> email: {user.email}<br />
                <i className="tiny material-icons">cake</i> {user.dateOfBirth}
                </p>
            </li>
        </ul>

    );
}

export { UserListItem };
