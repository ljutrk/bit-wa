import React, { Fragment } from 'react';

const SeasonLi = ({ season }) => {

    const premiereDate = season.premiereDate;
    const endDate = season.endDate;

    return (
        <Fragment>
            <li>{`${premiereDate} - ${endDate}`}</li>
        </Fragment>
    )
}

export { SeasonLi };