import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, hashHistory} from 'react-router';

import LoginView from './Views/LoginView';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="login" component={LoginView}/>
    </Router>,document.getElementById('app')
);



