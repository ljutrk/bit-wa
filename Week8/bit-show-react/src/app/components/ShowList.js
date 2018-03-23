import React from 'react';
import { ShowCardItem } from './ShowCardItem';

const ShowList = ({ showList }) => {
    
    return (
        <main className="container">
            <div className="headline-holder">
                <h1>Popular Shows</h1>
            </div>
            <div id="main-row" className="row">
                {showList.map((show, index) => {
                    if (show.id < 51) {
                        return <ShowCardItem key={index} show={show} />
                    }
                })}
            </div>
        </main>
    );
}

export { ShowList };