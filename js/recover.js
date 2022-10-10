"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 10/7/22,
 Time Created: 11:49 AM,
 File Name: recover.js,
 File Description:
 */


$(function(){
     let glitchUrl = 'https://clear-malleable-asparagus.glitch.me/movies'
     let deletedUrl = 'https://clear-malleable-asparagus.glitch.me/deleted'
     $('.recover').on('click', function(){
          alert('recovering all deleted movies')
          fetch(deletedUrl).then(data => data.json())
               .then(json => {
                    json.forEach(movie => {
                         let postRequest = {
                              method: 'POST',
                              headers:{
                                   'Content-Type': 'application/json'
                              },
                              body: JSON.stringify(movie)
                         }
                         
                         let deleteRequest = {
                              method: 'DELETE',
                              headers: {
                                   'Content-Type' : 'application/json'
                              }
                         }
                         let deleteUrl = deletedUrl + '/' + movie.id
                         fetch(glitchUrl, postRequest)
                         fetch(deleteUrl,deleteRequest ).then(() => location.reload())
                         
                    })
               })
     })
})

