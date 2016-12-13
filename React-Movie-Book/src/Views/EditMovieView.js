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
                                        <label className="col-lg-3 control-label">Movie name</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="movieName" className="form-control"
                                                   defaultValue={this.props.movieName}
                                                   ref={e => this.movieNameField = e}/>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Directed by</label>
                                        <div className="col-lg-9">
                                                    <input type="text" name="movieDirector" className="form-control" placeholder="Directed by" required
                                                           defaultValue={this.props.directorName}
                                                           ref={e => this.movieDirectorField = e}/>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Poster URL</label>
                                        <div className="col-lg-9">
                                                    <input type="text" name="posterUrl" className="form-control" placeholder="Poster URL" required
                                                           defaultValue={this.props.posterUrl}
                                                           ref={e => this.posterUrlField = e}/>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Review</label>
                                        <div className="col-lg-9">
                                                        <textarea name="MovieReview" rows="2" className="form-control" placeholder="Review" required
                                                                  defaultValue={this.props.movieReview}
                                                                  ref={e => this.MovieReviewField = e}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Cast</label>
                                        <div className="col-lg-9">
                                            <textarea name="movieCast" rows="2" className="form-control" placeholder="Cast" required
                                                      defaultValue={this.props.movieCast}
                                                      ref={e => this.CastMovieField = e}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Produced by</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="movieProducer" className="form-control" placeholder="Produced by" required
                                                   defaultValue={this.props.movieProducer}
                                                   ref={e => this.ProducerMovieField = e}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">IMBD Link</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="movieImdbLink" className="form-control" placeholder="IMDB Link" required
                                                   defaultValue={this.props.movieImdbLink}
                                                   ref={e => this.ImdbLinkField = e}/>
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
            this.MovieReviewField.value,
            this.CastMovieField.value,
            this.ProducerMovieField.value,
            this.ImdbLinkField.value
        );
    }
}

