import React, { Component } from 'react';

export default class LoginView extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="mol-md-10">
                        <form className="login-form form-horizontal" onSubmit={this.submitForm.bind(this)}>
                            <h1>Login</h1>
                            <div className="col-lg-10 form-group">
                            <label>
                                <div>Username:</div>
                                <input type="text" name="username" required
                                       ref={e => this.usernameField = e} />
                            </label>
                            </div>
                            <div className="col-lg-10 form-group">
                            <label>
                                <div>Password:</div>
                                <input type="password" name="password" required
                                       ref={e => this.passwordField = e} />
                            </label>
                            </div>
                            <div className="col-lg-10 col-lg-offset-2 form-group">
                                <input type="submit" className="btn-primary" value="Login" />
                            </div>
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
            this.usernameField.value, this.passwordField.value);
    }
}