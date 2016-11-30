import React, { Component } from 'react';
import './NavigationBar.css';
import '../../public/bootstrap-3.3.7-dist/css/bootstrap-theme.css'


export default class NavigationBar extends Component{

    render() {
        if(this.props.username == null){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md12">
                            <div className="navigation-bar">
                                <a className="btn-info" onClick={this.props.homeClicked} href="#">Home</a>
                                <a className="btn-info" onClick={this.props.loginClicked} href="#">Login</a>
                                <a className="btn-info" onClick={this.props.registerClicked} href="#">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }else{
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md12">
                            <div className="navigation-bar">
                                <a className="btn-info" onClick={this.props.homeClicked} href="#">Home</a>
                                <a className="btn-info" onClick={this.props.showMoviesClicked} href="#">Show Movies</a>
                                <a className="btn-info" onClick={this.props.createMovieClicked} href="#">Create Movie topic</a>
                                <a className="btn-info" onClick={this.props.logoutClicked} href="#">Logout</a>
                                <span className="loggedInUser">Welcome, {this.props.username}!</span>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }
    }
}