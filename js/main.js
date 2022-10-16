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
     let moviesArray = [];
     
     // glitch movie base url for the post and get requests
     let glitchUrl = 'https://clear-malleable-asparagus.glitch.me/movies';
     function getRandomArbitrary(min, max) {
          return Math.random() * (max - min) + min;
     }
     
     //getting the movies asynchronously 
     async function getMovies(){
          let results = await fetch(glitchUrl)
          let movies = await results.json()
          let max = movies.length - 1
          
          
          
          
          console.log(movies)
          
          for(let i = 0; i <= 20; i++){
               //delete the movie  
               let deleteButton = $('<button class="delete-button"><img class="gen-icon"' +
                                         ' src="../img/feather/x.svg"/></button>')
               
               deleteButton.css('filter', 'invert("90%")')
               deleteButton.css('opacity', '0.5')
               deleteButton.css('display', 'flex')
               deleteButton.css('position', 'absolute')
               deleteButton.css('top', '5px')
               deleteButton.css('right', '5px')
               deleteButton.css('z-index', '3')
               let movieInformation = $(`<div  class="movie-info disappear  p-5 " style="z-index: 9; color: white;">
                                        <h5>${movies[i].movieTitle}:</h5>
                                        <p>${movies[i].description}</p>
                                        <h6>rating: ${movies[i].rating}</h6>
                                      </div>`)
               //creating movie object and applying data attributes
               let movieBox = $(`<div data-id='${movies[i].id}'
                                      class='generated-content--box'
                                      data-img='${movies[i].imgLink}'
                                      data-embedded='${movies[i].embeddedUrl}'
                                      data-title='${movies[i].movieTitle}'
                                      data-description='${movies[i].description}'>
                                 </div>`)
               
               movieBox.css('position', 'relative')
               movieBox.css('background', `url("${movies[i].imgLink}") no-repeat`)
               movieBox.css('background-size', 'cover');
               movieBox.css('z-index', '0')
               
               
               $('#featured').append(movieBox);
               movieBox.append(deleteButton)
               movieBox.append(movieInformation)
          }
          
          for(let i = 0; i <= 20; i++){
               let movieIndex = Math.floor(getRandomArbitrary(0,max))
               let movieInformation = $(`<div  class="movie-info disappear  p-5 " style="z-index: 9; color: white;">
                                        <h5>${movies[movieIndex].movieTitle}:</h5>
                                        <p>${movies[movieIndex].description}</p>
                                        <h6>rating: ${movies[movieIndex].rating}</h6>
                                      </div>`)
               let deleteButton = $('<button class="delete-button"><img class="gen-icon"' +
                                         ' src="../img/feather/x.svg"/></button>')
               
               deleteButton.css('filter', 'invert("90%")')
               deleteButton.css('opacity', '0.5')
               deleteButton.css('display', 'flex')
               deleteButton.css('position', 'absolute')
               deleteButton.css('top', '5px')
               deleteButton.css('right', '5px')
               deleteButton.css('z-index', '3')
              
              
               //generating movies with data from the api call
               let movieBox = $(`<div data-id="${movies[movieIndex].id}"
                                      class='generated-content--box'
                                      data-img='${movies[movieIndex].imgLink}'
                                      data-embedded='${movies[movieIndex].embeddedUrl}'
                                      data-title='${movies[movieIndex].movieTitle}'
                                      data-description='${movies[movieIndex].description}'> </div>`)
               
               movieBox.css('position', 'relative')
               movieBox.css('background', `url("${movies[movieIndex].imgLink}") no-repeat`)
               movieBox.css('background-size', 'cover');
          
               $('#top-picks').append(movieBox);
               movieBox.append(deleteButton)
               movieBox.append(movieInformation)
          }
          
          for(let i = 0; i <= 20; i++){
               
               
               let deleteButton = $('<button class="delete-button"><img' +
                                         ' class="gen-icon "src="../img/feather/x.svg"/></button>')
     
               deleteButton.css('filter', 'invert("90%")')
               deleteButton.css('opacity', '0.5')
               deleteButton.css('display', 'flex')
               deleteButton.css('position', 'absolute')
               deleteButton.css('top', '5px')
               deleteButton.css('right', '5px')
               deleteButton.css('z-index', '3')
               
               
              
               let movieIndex = Math.floor(getRandomArbitrary(0,max))
               
               let movieInformation = $(`<div  class="movie-info disappear  p-5 " style="z-index: 9; color: white;">
                                        <h5>${movies[movieIndex].movieTitle}:</h5>
                                        <p>${movies[movieIndex].description}</p>
                                        <h6>rating: ${movies[movieIndex].rating}</h6>
                                      </div>`)
               
               
               let movieBox = $(`<div data-id="${movies[movieIndex].id}"
                                      class='generated-content--box',
                                      data-img='${movies[movieIndex].imgLink}'
                                      data-embedded='${movies[movieIndex].embeddedUrl}'
                                      data-title='${movies[movieIndex].movieTitle}'
                                      data-description='${movies[movieIndex].description}'> </div>`)
               movieBox.css('position', 'relative')
               movieBox.css('background', `url("${movies[movieIndex].imgLink}") no-repeat`)
               movieBox.css('background-size', 'cover');
          
               $('#favorites').append(movieBox);
               movieBox.append(deleteButton)
               movieBox.append(movieInformation)
               
          }
          // $('.generated-content--box').live('click', () => $(this).remove())
          $('.delete-button').parent().on('click', function(){
               let embeddedUrl = $(this).data('embedded')
               let video = $(`<div>
                   
                   <button class="video-delete"
                   style="
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        z-index: 7;
                   "
                   
                   ><img class="gen-icon "src="../img/feather/x.svg"/></button>
                   
                   <iframe id="iframe-embed"  scrolling="no" frameborder="0"
                                    src="${embeddedUrl}"
                                    allowFullScreen="true" webkitallowfullscreen="true"
                                    mozallowfullscreen="true"
                                    style="
                                        position: fixed;
                                        top:0;
                                        left:0;
                                        width: 100vw;
                                        height: 100vh;
                                        z-index: 6;
                                    ">
                                   </iframe>
                                  
                </div>`)
               $('body').append(video)
               $('.video-delete').on('click', () => {
                    $('.video-delete').parent().remove()
               })
          })
          let currentObj = null
          $('.generated-content--box').on('contextmenu', function(e){
               e.preventDefault()
               $('.edit-wrapper').toggleClass('hide')
               currentObj = $(this)
          })
         
         //editing movie in db on send 
          $('#edit-send').on('click', function(){
               let newName = $('#name').val()
               let newRating = $('#rating').val()
               let id  = $(currentObj).data('id')
               
               let url = glitchUrl + '/'+  id
               console.log(newName)
               let putData = {
                    id: id,
                    movieTitle: newName,
                    imgLink: $(currentObj).data('img'),
                    embeddedUrl: $(currentObj).data('embedded'),
                    rating: newRating,
                    description: $(currentObj).data('description')
               }

               let putReq = {
                    method: 'PUT',
                    headers:{
                         'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(putData)

               }
               fetch(url, putReq)
               $('#name').val('')
               $('#rating').val('')
               $('.edit-wrapper').toggleClass('hide')
               
               
          })
          
          
          
          $('.edit-wrapper').on('contextmenu', function(e){
                    e.preventDefault()
                    $('.edit-wrapper').toggleClass('hide')
                    
                    
               })
          $('.delete-button').on('click',function () {
               // fetch(glitchUrl)
               let deleteData = {
                    method: 'DELETE'
               }
               
               
               let idUrl = glitchUrl + '/' +($(this).parent().data('id'))
               $(this).parent().remove()
               
               let results = fetch(idUrl)
                    .then(data => (data.json()))
                    .then(result => {
                         
                         let postData = {
                              id: result.id,
                              movieTitle: result.movieTitle,
                              imgLink: result.imgLink,
                              embeddedUrl: result.embeddedUrl,
                              rating: result.rating,
                              description: result.description
                         }
                         
                         let deletedPostOptions ={
                              method: 'POST',
                              headers: {
                                   'Content-Type': 'application/json'
                              },
                              body: JSON.stringify(postData)
                         }
                         
                         let deleteMovieOptions = {
                              method: 'DELETE',
                              headers: {
                                   'Content-Type': 'application/json'
                              }
                         }
                         
                        let deletedUrl = 'https://clear-malleable-asparagus.glitch.me/deleted'
                         
                         //adds the object to deleted for recovery
                        fetch(deletedUrl, deletedPostOptions)
                         //actually deletes the object from the server
                        fetch(idUrl, deleteMovieOptions)
                        
                    })
                    
             
          });
          
          return ''
     }
     
     getMovies()
     
     
     
     
    
})