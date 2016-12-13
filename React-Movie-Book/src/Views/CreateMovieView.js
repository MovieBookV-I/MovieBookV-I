import React, { Component } from 'react';

import './CreateMovieView.css'

export default class CreateMovieView extends Component {
    render() {
        return (
            <div className="container">
                <div  className="jumbotron">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <form className="form-horizontal" onSubmit={this.submitForm.bind(this)}>
                                <fieldset>
                                    <legend>Create movie</legend>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Movie Name</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="movieName" className="form-control" placeholder="Movie name" required
                                                   ref={e => this.movieNameField = e}/>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Directed by</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="movieDirector" className="form-control" placeholder="Directed by" required
                                                   ref={e => this.movieDirectorField = e}/>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Poster Url</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="posterUrl" className="form-control" placeholder="Poster Url" required
                                                   ref={e => this.posterUrlField = e}/>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Review</label>
                                        <div className="col-lg-9">
                                            <textarea name="MovieReview" rows="2" className="form-control" placeholder="Review" required
                                                      ref={e => this.MovieReviewField = e}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Cast</label>
                                        <div className="col-lg-9">
                                            <textarea name="MovieReview" rows="2" className="form-control" placeholder="Cast" required
                                                      ref={e => this.CastMovieField = e}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Produced by</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="posterUrl" className="form-control" placeholder="Produced by" required
                                                      ref={e => this.ProducerMovieField = e}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">IMBD Link</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="posterUrl" className="form-control" placeholder="IMDB Link" required
                                                   ref={e => this.ImdbLinkField = e}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-lg-9 col-lg-offset-3">
                                            <button type="submit" className="btn btn-success">Create Movie</button>
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

