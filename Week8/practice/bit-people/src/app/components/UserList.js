import React from 'react';
import { UserListItem } from '../components/UserListItem';
import { UserGridItem } from '../components/UserGridItem';

const UserList = ({ data, isViewList, searchedUsers }) => {
    
    return (
        <div className="container">
            <div className="row">
                {searchedUsers().map((user, index) => {
                    if (isViewList) {
                        return <UserListItem key={index} user={user} />
                    } else {
                        return <UserGridItem key={index} user={user} />
                    }
                })}
            </div>
        </div>

    );
}

export { UserList };