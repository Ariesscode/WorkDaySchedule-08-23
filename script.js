var saveButtns = $(".saveBtn");
var storageInput = $('.description')
var currentDay = $("#currentDay");
var currentTime = $('h:mm:ss a');




  

var currentDay = document.getElementById("currentDay"); //Our instructor gave us permission to use moment js in our homework for this week
currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a'); // added time to display underneath header one 


$(document).ready(function() { //Acceptance Criteria: wrap jquery, so that all html elements will load first 
  console.log("Ready!");
  saveButtns.on('click',function() { // I want the input entered in the text area "description" to 
var storageInput = $(this).siblings('.description'); // finds input text area with a class of description
var inputId = storageInput.closest('.time-block').attr('id'); //this finds the correct id value closest to this specified class
var inputText = storageInput.val(); //retrieving the value of input to save in local storage 
localStorage.setItem(inputId,inputText); //setting key to show the hour associated with the input 
}) 
    

})
 




 

    


