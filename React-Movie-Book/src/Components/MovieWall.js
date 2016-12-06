import React, { Component } from 'react';

import '../Components/MovieWall'

import KinveyRequester from '../KinveyRequester';
import $ from 'jquery';

export default class MovieWallView extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <div className="movieView">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={this.props.posterUrl} alt="poster"/>
                                </div>
                                <div>
                                    <br/>
                                    <br/>
                                    <div><strong>Title: </strong>{this.props.movieName}</div>
                                    <br/>
                                    <br/>
                                    <div><strong>Director: </strong>{this.props.directorName}</div>
                                    <br/>
                                    <br/>
                                    <div><strong>Review: </strong>{this.props.movieReview}</div>
                                </div>
                                <br/>
                                <br/>
                                <div>
                                        <textarea name="comment" className="commentFields" id="commentField" rows="5"
                                                  ref={e => this.commentFields = e}>
                                        </textarea>
                                        <button onClick={createComment} className="btn btn-success">Create Comment</button>
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

                        //TODO

    }

    createComment(){
        console.log(this)
    }
}

function  createComment(){

}