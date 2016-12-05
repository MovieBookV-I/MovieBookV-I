import React, { Component } from 'react';
import './NavigationBar.css';
import '../../public/bootstrap-3.3.7-dist/css/bootstrap-theme.css'

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
                                    <a href="#" className="btn btn-success" onClick={this.props.homeClicked}> Home </a>
                                    <a href="#" className="btn btn-success" onClick={this.props.loginClicked}>  Login </a>
                                    <a href="#" className="btn btn-success" onClick={this.props.registerClicked}> Register </a>
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
                                    <a href="#" className="btn btn-success" onClick={this.props.homeClicked}> Home </a>
                                    <a href="#" className="btn btn-success"  onClick={this.props.showMoviesClicked}> Show Movies </a>
                                    <a href="#" className="btn btn-success"  onClick={this.props.createMovieClicked}> Create Movie topic </a>
                                    <a href="#" className="btn btn-success"  onClick={this.props.logoutClicked}> Logout </a>
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