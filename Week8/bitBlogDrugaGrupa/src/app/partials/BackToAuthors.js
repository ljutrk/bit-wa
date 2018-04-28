import React from 'react';
import { Link } from 'react-router-dom';

const BackToAuthors = () => {
    return (
        <Link to="/authors" className="waves-effect waves-teal btn-flat">Back to authors</Link>
    );
}

export { BackToAuthors };