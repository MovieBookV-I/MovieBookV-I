import React, { Component } from 'react';

import './DeleteMovieView.css'

export default class DeleteMovieView extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <div className="row deleteView">
                            <div className="col-md-3">
                                <form className="create-movie-form form-horizontal" onSubmit={this.submitForm.bind(this)}>
                                    <legend>Delete Movie:</legend>
                                    <h4>{this.props.movieName}</h4>
                                    <div>
                                        <input type="submit" className="btn-danger" value="Confirm Delete"/>
                                    </div>
                                </form>
                            </div>
                            <div id="deleteMoviePic" className="col-md-4">
                                <img src={this.props.posterUrl} alt="poster"/>
                            </div>
                            <div className="col-md-4">
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <div>
                                    <strong>Director:</strong> {this.props.directorName}
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
}

