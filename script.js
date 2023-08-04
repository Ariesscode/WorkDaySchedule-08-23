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
 

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//depends on time of color change
//future green, greyed out past, present red


var timeBlock = $('.time-block');
var currentTime = moment().hours();

function updateTimeBlockColor() { //remove/add class comparing time of time block and current time 
  $('.time-block').each(function() {
    var hr = parseInt($(this).attr('id').split('-')[1]); 
    timeBlock.each(function() {
      if (hr > currentTime) {
        $(this).addClass('future').removeClass('past present'); //if time greater than the current hour a future color will apply and added class
      } else if (hr < currentTime) {
        $(this).addClass('past').removeClass('present future'); //if time less than current hour a red color will apply and added class
      } else {
        $(this).addClass('present').removeClass('future past'); //else which is currrent hour = to itself will show red color added to class 
      }
      
    })
})
}
//description (this) uses for each loop to apply class
//or remove class depended on current hour, split is used to remove hiphens,dashes or symbols 
//between strings and numbers, parsing the class into a number , a class has quotation marks, which
//won't equal the hour number that we need to compare 
        


 

    


