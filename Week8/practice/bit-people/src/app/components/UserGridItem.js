import React from 'react';

const UserGridItem = ({ user }) => {
    
    const female = () => {
        if (user.gender === "female") {
            return "card #ffebee red lighten-5"
        } else {
            return "card"
        }
    }

    return (
        <div className="col s12 m4">
            <div className={female()}>
                <div className="card-image red">
                    <img src={user.picture} />
                    <span className="card-title">{user.firstName}</span>
                </div>
                <div className="card-content">
                    <p>{user.email} <br />
                        Birth date: {user.dateOfBirth}
                    </p>
                </div>
            </div>
        </div>
    );
}

export { UserGridItem };