import React from 'react';
import PropTypes from "prop-types";

const UserItem = ({user}) => {
    const { name, email, dob, picture } = user;

    return (
        // <div>
        //     <div className="col s12 m4">
        //         <div className="card">
        //             <div className="card-image">
        //                 <img src={picture.large} />
        //                 <span className="card-title">{name.first}</span>
        //             </div>
        //             <div className="card-content">
        //                 <p>Email: {user.hideEmailAddress(email)} <br />Date of Birth: {user.getDateOfBirth(dob)}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        
        <ul className="collection">
            <li className="collection-item avatar" >
                <img src={picture.large} alt="" className="circle" />
                <span className="title">Name: {name.first}</span>
                <p> email: {user.hideEmailAddress(email)} <br />
                    Date Of Birth: {user.getDateOfBirth(dob)}
                </p>
            </li>
        </ul>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;