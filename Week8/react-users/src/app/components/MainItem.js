import React from 'react';
import UsersList from './UsersList';
import PropTypes from "prop-types";


const MainItem = ({ data }) => {
    // console.log(data);

    return (
        <div className="container">
            <div className="row">
                <UsersList data={data} />
            </div>
        </div>
    )
}

MainItem.propTypes = {
    data: PropTypes.array.isRequired
}

export default MainItem;