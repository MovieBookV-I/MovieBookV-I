import React, { Component } from 'react';

import './CreateMovieView.css'

export default class DeleteMovieView extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-9">

                                    <form className="create-movie-form form-horizontal" onSubmit={this.submitForm.bind(this)}>
                                        <legend>Delete Movie:</legend>
                                        <h4>{this.props.movieName}</h4>
                                        <div>
                                            <input type="submit" className="btn-danger" value="Confirm Delete"/>
                                        </div>
                                    </form>

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
            this.props.movieId,
            this.movieNameField.value,
            this.movieDirectorField.value,
            this.posterUrlField.value,
            this.MovieReviewField.value
        );
    }
}

