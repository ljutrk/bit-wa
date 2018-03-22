import React, { Fragment } from 'react';

const CastLi = ({ cast }) => {

    const person = cast.person.name;
    const character = cast.character.name;

    return (
        <Fragment>
            <li>{`${person} - ${character}`}</li>
        </Fragment>
    )
}

export { CastLi };