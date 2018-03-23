import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { getAuthors } from '../services/AuthorService';
import { AuthorItem } from './AuthorItem'

class AuthorsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authors: [] }
    }

    componentDidMount() {
        getAuthors()
            .then(authors => this.setState({ authors }))
    }

    addAuthors = () => {
        return this.state.authors.map((authors, index) => {
            return <AuthorItem authors={authors} key={index} />
        })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <h3>Authors({this.state.authors.length})</h3>
                    <ul className="collection">
                        {this.addAuthors()}
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export { AuthorsPage };