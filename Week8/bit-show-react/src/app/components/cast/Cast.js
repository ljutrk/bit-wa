import React, { Fragment } from 'react';
import { CastLi } from './CastLi';

const Cast = ({ show }) => {

    return (
        <Fragment>
            <h3>Cast</h3>
            <ul className="single-show-cast">
                {show.cast.map((cast, index) => <CastLi key={index} cast={cast} />)}
            </ul>
        </Fragment>
    )
}

export { Cast };