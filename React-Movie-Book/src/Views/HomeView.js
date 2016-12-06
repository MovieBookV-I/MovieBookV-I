import React, { Component } from 'react';
import './HomeView.css';

export default class HomeView extends Component {
    render() {
        let movie1 = this.props.movies[0];
        let movie2 = this.props.movies[1];
        let movie3 = this.props.movies[2];

        return (
            <div className="container">
                <div  className="jumbotron">
                    <div className="fav-images" id="favImages">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="homepage-movie">
                                    <img src={movie1.posterUrl} alt="poster"/>
                                    <div>{movie1.movieName}</div>
                                    <div>Director: {movie1.directorName}</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="homepage-movie">
                                    <img src={movie2.posterUrl} alt="poster"/>
                                    <div>{movie2.movieName}</div>
                                    <div>Director: {movie2.directorName}</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="homepage-movie">
                                    <img src={movie3.posterUrl} alt="poster"/>
                                    <div>{movie3.movieName}</div>
                                    <div>Director: {movie3.directorName}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
