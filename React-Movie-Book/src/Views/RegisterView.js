import React, { Component } from 'react';
import './RegisterView.css';

export default class RegisterView extends Component {
    render() {
        return (
            <div className="container">
                <div  className="jumbotron">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <form className="form-horizontal register-form" onSubmit={this.submitForm.bind(this)}>
                                <fieldset>
                                    <legend>Register</legend>
                                    <div className="form-group">
                                        <label for="username" className="col-lg-2 control-label">Username</label>
                                        <div className="col-lg-10">
                                            <input type="text" name="username" className="form-control" placeholder="User name" required
                                                   ref={e => this.usernameField = e} />
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputPassword" className="col-lg-2 control-label">Password</label>
                                        <div className="col-lg-10">
                                            <input type="password" name="password" className="form-control" placeholder="Password" required
                                                   ref={e => this.passwordField = e} />
                                            <br/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label for="inputPassword" className="col-lg-2 control-label">Confirm password</label>
                                        <div className="col-lg-10">
                                            <input type="password" name="confirmPassword" className="form-control" placeholder="Password" required
                                                   ref={e => this.confirmPasswordField = e} />
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="email" className="col-lg-2 control-label">Email</label>
                                        <div className="col-lg-10">
                                            <input type="email" name="email" className="form-control" placeholder="Email"
                                                   ref={e => this.emailField = e} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-lg-10 col-lg-offset-2">
                                            <button type="submit" className="btn btn-success">Register</button>
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
            this.usernameField.value,
            this.passwordField.value,
            this.confirmPasswordField.value,
            this.emailField.value
        );
    }
}