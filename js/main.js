"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 10/6/22,
 Time Created: 4:07 AM,
 File Name: main.js,
 File Description:
 */

$(function(){
     function getRandomArbitrary(min, max) {
          return Math.random() * (max - min) + min;
     }
     
     async function getMovies(){
          let results = await fetch('https://clear-malleable-asparagus.glitch.me/movies')
          let movies = await results.json()
          let max = movies.length
          
          for(let i = 0; i <= 7; i++){
               let movieBox = $(`<div class='generated-content--box' data-embedded='${movies[i].embeddedUrl}'> </div>`)
               movieBox.css('position', 'relative')
               movieBox.css('background', `url("${movies[i].imgLink}") no-repeat`)
               movieBox.css('background-size', 'cover');
               
               $('#featured').append(movieBox);
          }
          
          for(let i = 0; i <= 7; i++){
               let movieIndex = Math.floor(getRandomArbitrary(5,max-1))
               console.log(movieIndex)
               let movieBox = $(`<div class='generated-content--box' data-embedded='${movies[movieIndex].embeddedUrl}'> </div>`)
               movieBox.css('position', 'relative')
               movieBox.css('background', `url("${movies[movieIndex].imgLink}") no-repeat`)
               movieBox.css('background-size', 'cover');
          
               $('#top-picks').append(movieBox);
          }
          
          for(let i = 0; i <= 7; i++){
               let movieIndex = Math.floor(getRandomArbitrary(5,max-1))
               console.log(movieIndex)
               let movieBox = $(`<div class='generated-content--box' data-embedded='${movies[movieIndex].embeddedUrl}'> </div>`)
               movieBox.css('position', 'relative')
               movieBox.css('background', `url("${movies[movieIndex].imgLink}") no-repeat`)
               movieBox.css('background-size', 'cover');
          
               $('#favorites').append(movieBox);
          }
     }
     getMovies()
})