import React, { Component } from 'react';
import './NavigationBar.css';
import '../../public/bootstrap-3.3.7-dist/css/bootstrap-theme.css'

import {Link} from 'react-router';


export default class NavigationBar extends Component{

    render() {
        if(this.props.username == null){
            return (
                <div className="container">
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="navigation-bar">
                                    {this.props.children}
                                    <a className="btn btn-success" onClick={this.props.homeClicked} href="#">Home</a>
                                    <Link to="/login" className="btn btn-success" onClick={this.props.loginClicked}> Login </Link> //TODO: Само този линк е със routing
                                    <a className="btn btn-success" onClick={this.props.registerClicked} href="#">Register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }else{
            return (
                <div className="container">
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="navigation-bar">
                                    <a className="btn btn-success" onClick={this.props.homeClicked} href="#">Home</a>
                                    <a className="btn btn-success" onClick={this.props.showMoviesClicked} href="#">Show Movies</a>
                                    <a className="btn btn-success" onClick={this.props.createMovieClicked} href="#">Create Movie topic</a>
                                    <a className="btn btn-success" onClick={this.props.logoutClicked} href="#">Logout</a>
                                    <span className="loggedInUser">Welcome, {this.props.username}!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }
    }
}