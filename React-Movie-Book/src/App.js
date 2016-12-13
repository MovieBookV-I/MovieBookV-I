import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import '../public/bootstrap-3.3.7-dist/css/bootstrap-theme.css'

import $ from 'jquery';
import KinveyRequester from './KinveyRequester';

import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';

import HomeView from './Views/HomeView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';
import MoviesView from './Views/MoviesView';
import CreateMovieView from './Views/CreateMovieView';
import EditMovieView from './Views/EditMovieView';
import DeleteMovieView from './Views/DeleteMovieView';
import MovieWall from './Components/MovieWall';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null,
            userId: null
        }
    }
    render() {
        return (
            <div className="App">
                <header>
                    <NavigationBar
                        username={this.state.username}
                        homeClicked={this.showHomePageMovies.bind(this)}
                        loginClicked={this.showLoginView.bind(this)}
                        registerClicked={this.showRegisterView.bind(this)}
                        showMoviesClicked={this.showMoviesView.bind(this)}
                        createMovieClicked={this.showCreateMovieView.bind(this)}
                        logoutClicked={this.logout.bind(this)}
                    />
                    <div className="container">
                        <div id="loading-box" className="alert-info">Loading...</div>
                        <div id="info-box" className="alert-success">Info</div>
                        <div id="error-box" className="alert-danger">Error</div>
                    </div>
                </header>

                <div id="main">

                </div>
                <Footer />
            </div>
        );
    }
    componentDidMount(){

        $(document).on(
            {
                ajaxStart: function(){$('#loading-box').show()},
                ajaxStop: function(){$('#loading-box').hide()}
            }
        );

        $(document).ajaxError(
            this.handleAjaxError.bind(this)
        );

        //load state
        this.setState({
            username: sessionStorage.getItem('username'),
            userId: sessionStorage.getItem('userId')
        });

        this.showHomePageMovies();

        $('#error-box, #info-box').click(function () {
            $(this).hide();
        });
    }

    handleAjaxError(event, response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }

    showInfo(message) {
        $('#info-box').text(message).show();
        setTimeout(function() {
            $('#info-box').fadeOut();
        }, 3000);
    }
    showError(errorMsg) {
        $('#error-box').text("Error: " + errorMsg).show();
    }
    showView(reactComponent){
        ReactDOM.render(
            reactComponent, document.getElementById('main')
        );
        $('#error-box').hide();
    }
    showHomePageMovies(){
        KinveyRequester.findAllMoviesWithoutLogin().then(findMoviesSuccess.bind(this));
        function findMoviesSuccess(movies){
            this.showView(<HomeView
                username={this.state.username}
                movies={movies}
            />)
        }
    }
    showLoginView(){
        this.showView(<LoginView onsubmit={this.login.bind(this)}/>);
    }
    login(username, password){
        KinveyRequester.loginUser(username, password).then(loginSuccess.bind(this));

        function loginSuccess(userInfo) {
            this.saveAuthInSession(userInfo);
            this.showInfo("Login successful");
            this.showMoviesView();
        }
    }
    register(username, password, confirmPassword, email){
        KinveyRequester.registerUser(username, password, confirmPassword, email).then(registerSuccess.bind(this));

        function registerSuccess(userInfo) {
            this.saveAuthInSession(userInfo);
            this.showInfo("Register successful");
            this.showMoviesView();
        }
    }

    saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('username', userInfo.username);

        // This will update the entire app UI (e.g. the navigation bar)
        this.setState({
            username: userInfo.username,
            userId: userInfo._id
        });
    }
    showRegisterView(){
        this.showView(<RegisterView onsubmit={this.register.bind(this)}/>);
    }
    showCreateMovieView(){
        this.showView(<CreateMovieView onsubmit={this.createMovie.bind(this)} />);
    }

    createMovie(movieName, directorName, posterUrl, movieReview, movieCast, movieProducer, movieImdbLink){
        KinveyRequester.createMovie(movieName, directorName, posterUrl, movieReview, movieCast, movieProducer, movieImdbLink)
                .then(createMovieSuccess.bind(this));

        function createMovieSuccess(){
            this.showInfo("Movie Created");
            this.showMoviesView();
        }
    }
    showMoviesView() {
        KinveyRequester.findAllMovies()
            .then(loadMoviesSuccess.bind(this));

        function loadMoviesSuccess(movies) {

            this.showInfo("Movies loaded.");
            this.showView(
                <MoviesView
                    movies={movies}
                    userId={this.state.userId}
                    onedit={this.loadMovieForEdit.bind(this)}
                    ondelete={this.loadMovieForDelete.bind(this)}
                    onclick={this.moreInfoMovie.bind(this)}
                />
            );
        }
    }

    moreInfoMovie(movieId){
           KinveyRequester.findMovieById(movieId)
               .then(findMovieForMovieWallSuccess.bind(this));
           function findMovieForMovieWallSuccess(movie) {
               let movieWallView = <MovieWall
                   movieId={movie._id}
                   movieName={movie.movieName}
                   directorName={movie.directorName}
                   posterUrl={movie.posterUrl}
                   movieReview={movie.movieReview}
                   movieCast={movie.movieCast}
                   movieProducer={movie.movieProducer}
                   imdbLink={movie.movieImdbLink}
               />;
               this.showView(movieWallView);
           }
    }

    loadMovieForEdit(movieId){
        KinveyRequester.findMovieById(movieId)
            .then(findMovieSuccess.bind(this));

        function findMovieSuccess(movie) {
            let editMovieView = <EditMovieView
                movieId={movie._id}
                movieName={movie.movieName}
                directorName={movie.directorName}
                posterUrl={movie.posterUrl}
                movieReview={movie.movieReview}
                movieCast={movie.movieCast}
                movieProducer={movie.movieProducer}
                movieImdbLink={movie.movieImdbLink}
                onsubmit={this.editMovie.bind(this)}
            />;
            this.showView(editMovieView);
        }
    }
    loadMovieForDelete(movieId){
        KinveyRequester.findMovieById(movieId)
            .then(findMovieSuccess.bind(this));

        function findMovieSuccess(movie) {
            console.log(movie);
            this.showView(
                <DeleteMovieView
                    onsubmit={this.deleteMovie.bind(this)}
                    movieId={movie._id}
                    movieName={movie.movieName}
                    directorName={movie.directorName}
                    posterUrl={movie.posterUrl}
                    movieReview={movie.movieReview}
                />);
        }
    }
    editMovie(movieId, movieName, directorName, posterUrl, movieReview, movieCast, movieProducer, movieImdbLink){
        KinveyRequester.editMovie(movieId, movieName, directorName, posterUrl, movieReview, movieCast, movieProducer, movieImdbLink)
            .then(editMovieSuccess.bind(this));

        function editMovieSuccess(response){
            this.showInfo("Movie Edited");
            this.showMoviesView();
        }
    }

    deleteMovie(movieId){
        KinveyRequester.deleteMovie(movieId)
            .then(editMovieSuccess.bind(this));

        function editMovieSuccess(response){
            this.showInfo("Movie Deleted");
            this.showMoviesView();
        }
    }

    logout(){
        sessionStorage.clear();
        // This will update the entire app UI (e.g. the navigation bar)
        this.setState({
            username: null,
            userId: null
        });

        this.showHomePageMovies();
    }
}

