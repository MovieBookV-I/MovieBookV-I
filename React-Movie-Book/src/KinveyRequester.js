import $ from 'jquery';

let KinveyRequester = (function () {

   const base_url = "https://baas.kinvey.com/";
   const app_id = "kid_rJMu1Knze";
   const app_secret = "9f926936027349ff99321e65ad03e058";
    const appAuthHeaders = {
        'Authorization': "Basic " + btoa(app_id + ":" + app_secret)
    };

   function loginUser(username, password) {
       return $.ajax({
           method: "POST",
           url: base_url + "user/" + app_id + "/login",
           headers: appAuthHeaders,
           data: JSON.stringify({username, password}),
           contentType: "application/json"
       });
   }

   function registerUser(username, password, confirmPassword, email){
       if(password === confirmPassword && password.length >= 6) {
           return $.ajax({
               method: "POST",
               url: base_url + "user/" + app_id,
               headers: appAuthHeaders,
               data: JSON.stringify({username, password, email}),
               contentType: "application/json"
           });
       }else {
           $('#error-box').show().test("Invalid credentials"); //TODO
       }
   }

   function createMovie(movieName, directorName, posterUrl, movieReview) {
        return $.ajax({
            method: "POST",
            url: base_url + "appdata/" + app_id + "/movies",
            headers: getUserAuthHeaders(),
            data: JSON.stringify({movieName, directorName, posterUrl, movieReview}),
            contentType: "application/json"
        })
    }

    function editMovie(movieId, movieName, directorName, posterUrl, movieReview) {
        return $.ajax({
            method: "PUT",
            url: base_url + "appdata/" + app_id + "/movies/" + movieId,
            headers: getUserAuthHeaders(),
            data: JSON.stringify({movieName, directorName, posterUrl, movieReview}),
            contentType: "application/json"
        });
    }

    function deleteMovie(movieId) {
        return $.ajax({
            method: "DELETE",
            url: base_url + "appdata/" + app_id + "/movies/" + movieId,
            headers: getUserAuthHeaders()
        });
    }


   
   function findAllMovies() {
       return $.ajax({
           method: "GET",
           url: base_url + "appdata/" + app_id + "/movies",
           headers: getUserAuthHeaders()
       });
   }
   
   function findMovieById(movieId) {
       return $.ajax({
           method: "GET",
           url: base_url + "appdata/" + app_id + "/movies/" + movieId,
           headers: getUserAuthHeaders()
       })
   }

    function getUserAuthHeaders(){
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }


   return {
       loginUser,
       registerUser,
       createMovie,
       editMovie,
       deleteMovie,
       findAllMovies,
       findMovieById
   }
})();

export default KinveyRequester;