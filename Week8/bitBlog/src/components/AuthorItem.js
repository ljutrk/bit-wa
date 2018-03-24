import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const AuthorItem = ({ authors }) => {
    const link = `/posts/:${authors.id}`

    return (
        <Fragment>
            <Link to={link}><li className="collection-item">Name Surname</li></Link>
        </Fragment>
    )
}
export { AuthorItem }

