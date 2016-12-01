import React from 'react';
import './MoviesView.css';

export default function MoviesView(props) {
   let movies = this.props.movies.map(movie =>
       <img src={movie.moviePoster} alt="Movie poster"/> //TODO
   );


    return <div className="movies-view">
        <div className="container">
            <div className="jumbotron">
                <h2>Movies:</h2>
                <div className="row">
                    {movies}
                </div>
            </div>
        </div>
    </div>
}