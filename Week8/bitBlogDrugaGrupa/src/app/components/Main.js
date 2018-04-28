import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SinglePostPage } from './SinglePostPage';
import { SingleAuthorPage } from './SingleAuthorPage';
import { AuthorsPage } from './AuthorsPage';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import newPost from './newPost';

const Main = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/post/new" component={newPost} />
                <Route path="/post/:id" component={SinglePostPage} />
                <Route path="/author/:id" component={SingleAuthorPage} />
                <Route path="/authors" component={AuthorsPage} />
                <Route exact path="/about" component={AboutPage} />
            </Switch>
        </div>
    );
}

export { Main };