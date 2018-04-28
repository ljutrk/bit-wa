import React from 'react';
import { Link } from 'react-router-dom';

const BackToPosts = () => {
    return (
        <Link to="/" className="waves-effect waves-teal btn-flat">Back to posts</Link>
    );
}

export { BackToPosts };