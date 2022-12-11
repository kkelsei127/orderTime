//global variables
var saveButton = $('#hour');


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
    //TODO Step1: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage.
        //HINT:
        //What does `this` reference in the click listener function? 
        //How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked?
        //How might the id be useful when saving the description in local storage?
    
    //this needs to save currently does not traverse the dom
    saveButton.on('click', function(event) {
        console.log('clicked!')
        event.preventDefault
    });
        
    //TODO Step2: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.
        //HINTS:
        //How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes?
        //How can Day.js be used to get the current hour in 24-hour time?

    //checks time to change timeblock color
    var checkTime = function() {
        //gets current time
        var currentTime = moment().format('H');
        console.log(currentTime)
        //gets timeBlockEl with class
        var timeBlockEl = $('.textarea');
        console.log(timeBlockEl[14])

        for (var i = 0; i < timeBlockEl.length; i++) {
            //gets element id as a string
            var elementID = timeBlockEl[i].id;
            console.log(elementID)
            //get element by ID
            var changeID = document.getElementById(timeBlockEl[i].id)

            //remove any old classes from element
            $(timeBlockEl[i].id).removeClass('.present .past .future');

            //apply new class if task is present/past/future
            if(elementID < currentTime) {
                $(changeID).addClass('past');
            }
            else if (elementID > currentTime) {
                $(changeID).addClass('future');
            }
            else {
                $(changeID).addClass('present');
            }
            
        }
    }
    //this should recheck the time every 5 minutes
    setInterval(checkTime(), (1000 * 60) * 5);
    console.log(timeBlockEl[14].id)


    //TODO Step3: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
        //HINT: How can the id attribute of each time-block be used to do this?
        
   
    // COMPLETED Step4: Add code to display the current date in the header of the page.
    //Displays the current time in the format: month:day:year hours:minutes am/pm
    var time = dayjs().format('MMM D, YYYY, hh:mm a');
    $('#currentDay').text(time);

  });
  
// checkTime every 5 minutes
