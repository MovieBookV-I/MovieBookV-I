import React, { Component } from 'react';

import './CreateMovieView.css'

export default class EditMovieView extends Component {
    render() {
        return (
            <div className="container">
                <div  className="jumbotron">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <form className="form-horizontal" onSubmit={this.submitForm.bind(this)}>
                                <fieldset>
                                    <legend>Edit Movie:</legend>
                                    <div className="form-group">
                                        <label for="title" className="col-lg-3 control-label">Title:</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="movieName" className="form-control"
                                                   defaultValue={this.props.movieName}
                                                   ref={e => this.movieNameField = e}/>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="director" className="col-lg-3 control-label">Director:</label>
                                        <div className="col-lg-9">
                                                    <input type="text" name="movieDirector" className="form-control"
                                                           defaultValue={this.props.directorName}
                                                           ref={e => this.movieDirectorField = e}/>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="photo" className="col-lg-3 control-label">Poster URL:</label>
                                        <div className="col-lg-9">
                                                    <input type="text" name="posterUrl" className="form-control"
                                                           defaultValue={this.props.posterUrl}
                                                           ref={e => this.posterUrlField = e}/>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="summary" className="col-lg-3 control-label">Review:</label>
                                        <div className="col-lg-9">
                                                        <textarea name="MovieReview" rows="2" className="form-control"
                                                                  defaultValue={this.props.movieReview}
                                                                  ref={e => this.MovieReviewField = e}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-lg-9 col-lg-offset-3">
                                            <button type="submit" className="btn btn-success">Edit Movie</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );

    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(
            this.props.movieId,
            this.movieNameField.value,
            this.movieDirectorField.value,
            this.posterUrlField.value,
            this.MovieReviewField.value
        );
    }
}

