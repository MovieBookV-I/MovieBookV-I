import React, { Component } from 'react';

import './CreateMovieView.css'

export default class CreateMovieView extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-horizontal">
                                    <form className="create-movie-form" onSubmit={this.submitForm.bind(this)}>
                                                <h1>Create Movie:</h1>
                                                <label>
                                                    <div className="form-group">
                                                        <lable className="col-lg-2 control-label">Title:</lable>
                                                        <div className="col-lg-10">
                                                            <input type="text" name="movieName" className="createMovieFields" required
                                                                   ref={e => this.movieNameField = e}/>
                                                        </div>
                                                    </div>
                                                </label>
                                                <br/>
                                                <label>
                                                    <div className="form-group">
                                                        <lable className="col-lg-2 control-label">Director:</lable>
                                                        <div className="col-lg-10">
                                                        <input type="text" name="movieDirector" className="createMovieFields" required
                                                               ref={e => this.movieDirectorField = e}/>
                                                        </div>
                                                    </div>
                                                </label>
                                                <br/>
                                                <label>
                                                    <div className="form-group">
                                                        <lable className="col-lg-2 control-label">Poster URL:</lable>
                                                        <div className="col-lg-10">
                                                        <input type="text" name="posterUrl" className="createMovieFields" required
                                                               ref={e => this.posterUrlField = e}/>
                                                        </div>
                                                    </div>
                                                </label>
                                                <br/>
                                                <label>
                                                    <div className="form-group">
                                                        <lable className="col-lg-2 control-label">Review:</lable>
                                                        <div className="col-lg-10">
                                                        <textarea name="MovieReview" rows="2" className="createMovieFields" required
                                                                  ref={e => this.MovieReviewField = e}/>
                                                        </div>
                                                    </div>
                                                </label>
                                                <br/>
                                                <div>
                                                    <input type="submit" className="btn-success" value="Create Movie"/>
                                                </div>
                                    </form>
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
            this.movieNameField.value,
            this.movieDirectorField.value,
            this.posterUrlField.value,
            this.MovieReviewField.value
            );
    }
}

