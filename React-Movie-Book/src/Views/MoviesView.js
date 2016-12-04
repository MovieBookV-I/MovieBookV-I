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
                       {movies}
                   </div>
               </div>
           </div>
        );
    }

    ///     //<div>
            //    {this.getMovieActions(movie, this.props.userId)}
            //</div>-->

    //getMovieActions(movie, userId) {
    //    if (movie._acl.creator === userId)
    //        return (
    //            <div>
    //                <input type="button" value="More info" className="btn btn-danger"
    //                       onClick={this.props.moreInfoMovieClicked.bind(this, movie._id)} />
    //                &nbsp;
    //                <input type="button" value="Delete" className="btn btn-danger"
    //                       onClick={this.props.deleteMovieClicked.bind(this, movie._id)} />
    //                &nbsp;
    //                <input type="button" value="Delete" className="btn btn-danger"
    //                       onClick={this.props.deleteMovieClicked.bind(this, movie._id)} />
//
    //            </div>
    //        );
    //    else
    //        return <div></div>;
    //}
}