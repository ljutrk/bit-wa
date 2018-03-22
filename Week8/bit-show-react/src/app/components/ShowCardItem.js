import React from 'react';
import { Link } from 'react-router-dom';

const ShowCardItem = ({show}) => {
    
   const getShowID = () => {
       return `/show/${show.id}` 
   }

    return (
         <div className="col-md-4 col-show single-show" data-id={show.id}>
           <Link to={getShowID()}> <img src={show.mediumImage} alt="show" />
            <h3 className="show-title">{show.name}</h3>
            </Link>
        </div>
    );
}

export { ShowCardItem };