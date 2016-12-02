import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, hashHistory} from 'react-router';

import LoginView from './Views/LoginView';
import HomeView from './Views/HomeView';
import RegisterView from './Views/RegisterView';
import MoviesView from './Views/MoviesView';
import CreateMovieView from './Views/CreateMovieView';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="home" component={HomeView}/>
            <Route path="login" component={LoginView}/>
            <Route path="register" component={RegisterView}/>
            <Route path="showMovies" component={MoviesView}/>
            <Route path="createMovie" component={CreateMovieView}/>
        </Route>

    </Router>,document.getElementById('app')
);



