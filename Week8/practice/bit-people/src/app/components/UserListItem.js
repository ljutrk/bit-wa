import React from 'react';

const UserListItem = ({user}) => {
    
    return (
        <ul className="collection">
            <li className="collection-item avatar">
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
