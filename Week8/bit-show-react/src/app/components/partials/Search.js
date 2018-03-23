import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }

    changeHandler = (event) => {
        this.setState({ searchValue: event.target.value })
        this.props.shows
    }

    clickHandler = (event) => {

        this.props.clickFromSearch(event.target.id);
    }

    addSearchResult = () => {

        if (this.state.searchValue !== "") {
            const filteredList = this.props.shows.filter(show => {

                return show.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
            })

            return filteredList.map((show, index) => {

                const showID = `/show/${show.id}`
                if (index < 10) {

                    return <Link to={showID} onClick={this.clickHandler}><li key={index} className="single-show" id={show.id}>{show.name}</li></Link>
                }
            })
        }
        return
    }


    render() {
        return (
            <form className="form-inline">
                <input className="form-control" type="search" aria-label="Search" placeholder="Search" value={this.state.searchValue} onChange={this.changeHandler} />
                <ul className="search-results">
                    {this.addSearchResult()}
                </ul>
            </form>
        );
    }
}

export { Search };