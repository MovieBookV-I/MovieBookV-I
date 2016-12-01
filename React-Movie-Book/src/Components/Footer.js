import React, { Component } from 'react';
import './Footer.css';


export default class Footer extends Component{

    render() {
        return (
            <div className="footer-view">

                <div className="container">
                    <div className="jumbotron">
                        All rights reserved 2016 © We are not responsible for the movie uploaded by our users.
                    </div>
                </div>
            </div>
        );
    }
}