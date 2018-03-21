import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }

    changeHandler = (event) => {
        this.props.searchValue(event.target.value);
        this.setState({searchValue: event.target.value})        
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input value={this.state.searchValue} onChange={this.changeHandler} id="search" type="search" required />
                            <label className="label-icon"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        )
    }

}

export { Search };