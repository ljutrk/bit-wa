
import React from 'react';
import PropTypes from "prop-types";

const UserGridItem = ({ user }) => {
    const { gender, name, email, dob, picture } = user;

    const isGenderFemale = () => {
        if (gender === "female") {
            return "card #ff5252 red accent-2"
        } else {
            return "card #b2ff59 light-green accent-2"
        }
    }

    //ternarni operator!!

    return (
        <div >
            <div className="col s12 m4">
                <div className={isGenderFemale()}>
                    <div className="card-image">
                        <img src={picture.large} />
                        <span className="card-title">{name.first}</span>
                    </div>
                    <div className="card-content">
                        <p>Email: {user.hideEmailAddress(email)} <br />Date of Birth: {user.getDateOfBirth(dob)}</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

UserGridItem.propTypes = {
    user: PropTypes.object.isRequired
}

export { UserGridItem };