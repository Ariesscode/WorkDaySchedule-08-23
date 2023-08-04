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
var eventText = storageInput.val(); //retrieving the value of input to save in local storage 
localStorage.setItem(inputId,eventText);
storageInput.prop('disabled', true);//setting key to show the hour associated with the input 
}) 
});





$('.description').each(function() { //for each function used to loop throught all text area via class of decription
  var hour = $(this).closest('.time-block').attr('id'); 
  var eventSaved = localStorage.getItem(hour); //grab the event saved in $(this) id 
  if (eventSaved) {
    $(this).val(eventSaved); //event is the value of the description class
    $(this).prop('disabled', true); //disabled will make it able to save to local storage and lock the event input, so that it is 
                                    //Note: I would like to know the difference between read only and disabled, seem like both do the same thing
  }
});
 




 

    


