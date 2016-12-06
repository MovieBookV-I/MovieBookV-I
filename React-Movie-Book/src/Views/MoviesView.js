import React, { Component } from 'react';

import './MoviesView.css'

export default class MoviesView extends Component{
    render(){

        let movies = this.props.movies.map(movie =>
            <div key={movie._id}>
                <div className="movieView">
                    <div className="row">

                        <div className="col-md-4">
                            <img src={movie.posterUrl} alt="poster"/>
                        </div>
                        <div className="col-md-8">
                            <br/>
                            <br/>
                            <div><strong>Title: </strong>{movie.movieName}</div>
                            <br/>
                            <br/>
                            <div><strong>Director: </strong>{movie.directorName}</div>
                            <br/>
                            <br/>
                            <div><strong>Review: </strong>{movie.movieReview}
                                <div>
                                    {this.getMovieActions(movie, this.props.userId)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="fav-images">
                        <h1>Movie List</h1>
                        {movies}
                    </div>
                </div>
            </div>
        );
    }



    getMovieActions(movie, userId) {
        if (movie._acl.creator === userId)
            return (
                <div>
                    <input type="button" value="Edit Movie" className="btn btn-success"
                           onClick={this.props.onedit.bind(this, movie._id)} />
                    &nbsp;
                    <input type="button" value="Delete" className="btn btn-danger"
                           onClick={this.props.ondelete.bind(this, movie._id)} />
                </div>
            );
        else
            return <div></div>;
    }
}