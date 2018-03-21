import React from 'react';
import PropTypes from "prop-types";
import { UserListItem } from "./UserListItem";
import { UserGridItem } from "./UserGridItem";

const UserList = (props) => {
    const { data, isListView, searchUsers } = props;


    const listOrGrid = () => {
        return searchUsers().map((user, index) => {
            if (isListView) {
                return <UserListItem key={index} user={user} />
            } else {
                return <UserGridItem key={index} user={user} />
            }
        })
    }

    return (
        <div className="container">
            <div className="row">
                {listOrGrid()}
            </div>
        </div >
    )
}

UserList.propTypes = {
    data: PropTypes.array.isRequired
}


export { UserList };