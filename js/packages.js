"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 10/6/22,
 Time Created: 10:02 AM,
 File Name: packages.js,
 File Description:
 */


window.onload = function () {
    document.getElementsByClassName('submit-btn')[0].addEventListener('click', ()=>{
         
         //grabbing title and rating
         let title = document.getElementById('title').value
         let rating = document.getElementById('rating').value
         
         // the api link and url
         let imdbUrl = `https://api.themoviedb.org/3/search/movie?api_key=a5f2ca1222f74d272c6d180f5d898ba6&language=en-US&query=${title}&page=1&include_adult=false`
         
         // this is  grabbing the movie title, poster, rating, etc.  from the json file and posting it on our website
         fetch(imdbUrl)
          .then(data => data.json())
          .then(results => {
               
               //forming post data/body
               let newJson = {
                    id: results['results'][0]['id'],
                    movieTitle: title,
                    rating: rating,
                    //calling the image poster and description from the api
                    imgLink:"https://image.tmdb.org/t/p/w1280/" + results['results'][0]['poster_path'],
                    embeddedUrl: '',
                    description: results['results'][0]['overview']
               }
               
               //forming post requests
               let methodData = {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newJson)
               }
               //posting the data to the json server
               $('#title').val('')
               $('#rating').val('')
               fetch('https://clear-malleable-asparagus.glitch.me/movies', methodData).then(() => location.reload())
               
          })
    })
}