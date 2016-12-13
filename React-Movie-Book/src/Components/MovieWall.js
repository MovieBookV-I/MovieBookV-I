import React, { Component } from 'react';

import './MoviesWall.css'

//import KinveyRequester from '../KinveyRequester';
//import $ from 'jquery';

export default class MovieWallView extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <div className="movieView">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={this.props.posterUrl} alt="poster"/>
                                </div>
                                <div className="col-md-8">
                                    <br/>
                                    <br/>
                                    <div><h4><strong>Movie name: </strong>{this.props.movieName}</h4></div>
                                    <br/>
                                    <div><strong>Director: </strong>{this.props.directorName}</div>
                                    <br/>
                                    <br/>
                                    <div><strong>Review: </strong>{this.props.movieReview}</div>
                                    <br/>
                                    <br/>
                                    <div><strong>Cast: </strong>{this.props.movieCast}</div>
                                    <br/>
                                    <br/>
                                    <div><strong>Produced by: </strong>{this.props.movieProducer}</div>
                                    <br/>
                                    <br/>
                                    <div><a href={this.props.imdbLink} target="_blank" className="btn btn-primary">Link to IMDB</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }



    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(
            this.props.movieId
        );



    }

    //createComment(){
    //    console.log(this) //TODO
    //}
}

