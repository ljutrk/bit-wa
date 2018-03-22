import React, { Fragment } from 'react';
import { SeasonLi } from './SeasonLi';

const Seasons = ({ show }) => {
    return (
    <Fragment >
        <h3> Seasons
            <span className="season-counter">({show.seasons.length})</span>
        </h3>
        <ul>
            {show.seasons.map((season, index) => < SeasonLi key={index} season={season} />)}
        </ul >
    </Fragment>
    )
}

export { Seasons };