import React, { Component } from 'react';

import './MoviesView.css'

export default class MoviesView extends Component{
    render(){

        let movies = this.props.movies.map(movie =>
         <div>
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
                        <button className="btn-sm btn-info">More info</button>
                        </div>
                    </div>
                </div>
             </div>
         </div>
        );
        console.log(movies);
        return (
           <div className="container">
               <div className="jumbotron">
                   <div className="fav-images">
                       {movies}
                   </div>
               </div>
           </div>
        );

    }
}