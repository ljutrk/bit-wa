import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/App';
import { AboutPage } from './app/components/AboutPage'
import { HashRouter, Switch, Route } from "react-router-dom"

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={AboutPage} />
        </Switch>
    </HashRouter>
    , document.getElementById('root'));

