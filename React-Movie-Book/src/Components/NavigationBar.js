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
                                    <Link to="/home" className="btn btn-success" onClick={this.props.homeClicked}> Home </Link>
                                    <Link to="/login" className="btn btn-success" onClick={this.props.loginClicked}> Login </Link>
                                    <Link to="/register" className="btn btn-success" onClick={this.props.registerClicked}> Register </Link>
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
                                    <Link to="/home" className="btn btn-success" onClick={this.props.homeClicked}> Home </Link>
                                    <Link to="/showMovies" className="btn btn-success" onClick={this.props.showMoviesClicked}> Show Movies </Link>
                                    <Link to="/createMovie" className="btn btn-success" onClick={this.props.createMovieClicked}> Create Movie topic </Link>
                                    <Link to="/home" className="btn btn-success" onClick={this.props.logoutClicked}> Logout </Link>
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