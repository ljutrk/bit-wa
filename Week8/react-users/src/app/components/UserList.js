import React from 'react';
import PropTypes from "prop-types";
import { UserListItem } from "./UserListItem";
import { UserGridItem } from "./UserGridItem";

const UserList = (props) => {
    // console.log(data);
    const { data, isListView } = props;
    return (

        <div className="container">
            <div className="row">
                {data.map((user, index) => {
                    if (isListView) {
                        return <UserListItem key={index} user={user} />
                    } else {
                        return <UserGridItem key={index} user={user} />
                    }
                })}
            </div>
        </div >
    )
}

UserList.propTypes = {
    data: PropTypes.array.isRequired
}


export { UserList };