import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Switch, Route } from "react-router-dom"
import {AboutPage} from "./app/components/AboutPage"




ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={AboutPage} />
        </Switch>
    </HashRouter>

    , document.getElementById('root'));
registerServiceWorker();
