import React, { Component, Fragment } from 'react';
import { Header } from './components/partials/Header';
import { Footer } from './components/partials/Footer';
import { fetchShows } from '../services/ShowService';
import { ShowList } from './components/ShowList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { shows: [] };
  }

  componentDidMount() {
    fetchShows()
      .then(shows => { this.setState({ shows }) })


    
  }

  render() {
    return (
      <Fragment>
        <Header shows={this.state.shows} />
        <ShowList showList={this.state.shows} />
        <Footer />
      </Fragment>
    );
  }
}

export { App };
