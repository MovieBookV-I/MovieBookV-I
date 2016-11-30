import React, { Component } from 'react';

export default class RegisterView extends Component {
    render() {
        return (
            <form className="register-form" onSubmit={this.submitForm.bind(this)}>
                <h1>Registration</h1>
                <label>
                    <div>Username:</div>
                    <input type="text" name="username" required
                           ref={e => this.usernameField = e} />
                </label>
                <label>
                    <div>Password:</div>
                    <input type="password" name="password" required
                           ref={e => this.passwordField = e} />
                </label>
                <label>
                    <div>ConfirmPassword:</div>
                    <input type="password" name="confirmPassword" required
                           ref={e => this.confirmPasswordField = e} />
                </label>
                <label>
                    <div>Email:</div>
                    <input type="email" name="email"
                           ref={e => this.emailField = e} />
                </label>
                <div>
                    <input type="submit" className="btn-primary" value="Register" />
                </div>
            </form>
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