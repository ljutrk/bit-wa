import React from 'react';
import UserItem from './UserItem';
import PropTypes from "prop-types";

const UsersList = ({ data }) => {

    return (
        <div className="userList">
            {data.map((user, index) => {

                return <UserItem key={index} user={user} />
            })}
        </div>
    )
}

UsersList.propTypes = {
    data: PropTypes.array.isRequired
}

export default UsersList;