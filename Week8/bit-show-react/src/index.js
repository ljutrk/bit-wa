import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/App';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { SingleShowPage } from './app/components/SingleShowPage';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/show/:id' component={SingleShowPage} />
        </Switch>
    </HashRouter>
    , document.getElementById('root'));

