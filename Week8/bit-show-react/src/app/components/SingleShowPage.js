import React, { Fragment } from 'react';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { fetchSingleShow } from '../../services/ShowService';
import { Seasons } from './seasons/Seasons'
import { Cast } from './cast/Cast'

class SingleShowPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: null
        }
    }

    componentDidMount() {
        const showId = this.props.match.params.id;
        fetchSingleShow(showId)
            .then(show => {
                this.setState({ show })
            })
    }

    render() {
        // console.log(this.state.show);

        if (!this.state.show) {
            return <h3>Loading...</h3>
        }

        return (
            <Fragment>
                <Header />
                <main className="container">
                    <h1 className="single-show-title"></h1>
                    <div className="row row1">
                        <div className="col-md-6 single-show-img">
                            <img src={this.state.show.originalImage} />
                        </div>
                        <div className="col-md-6 ">
                            <div>
                                <Seasons show={this.state.show} />
                                <ul className="single-show-seasons"></ul>
                            </div>
                            <div>
                                <Cast show={this.state.show} />
                            </div>
                        </div>
                    </div>
                    <div className="row row2">
                        <h2>Show details:{this.state.show.summary}</h2>
                        <div className="col-12 single-show-details"></div>
                    </div>
                </main>
                <Footer />
            </Fragment>
        );
    }
}
export { SingleShowPage };
