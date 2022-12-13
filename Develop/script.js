//global variables
var saveButton = document.querySelectorAll('button')
var eventText = document.querySelectorAll('textarea')
var timeBlockEl = Array.from(document.getElementsByClassName('time-block'));


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
    //Completed Step1: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage.
        //HINT:
        //What does `this` reference in the click listener function? 
        //How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked?
        //How might the id be useful when saving the description in local storage?
            for (i of saveButton) {
            //THIS ALLOWS ALL CLICK EVENTS TO BE REGISTERED
            i.addEventListener('click', function(event) {
                
                var eventInfo = {
                    timeSlot: (event.target.parentElement.id),
                    //this gets the clicked save buttons parent elements 2nd child (aka the text box) input
                    eventDesc: (event.target.parentElement.children[1]).value
                }
                
                localStorage.setItem(eventInfo.timeSlot, eventInfo.eventDesc)
                
            })
            }

    //COMPLETE! Step2: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.
        //HINTS:
        //How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes?
        //How can Day.js be used to get the current hour in 24-hour time?

    //checks time to change timeblock color
    var checkTime = function() {
        //gets current time
        var currentTime = dayjs().hour();
       
        //gets timeBlockEl with class
        var timeBlockEl = document.getElementsByClassName('time-block');   

        for (var i = 0; i < timeBlockEl.length; i++) {
            //gets element id as a string
            var elementID = timeBlockEl[i].id;
           
            //apply new class if task is present/past/future
            if(elementID < currentTime) {
                $(timeBlockEl[i]).addClass('past');
            }
            else if (elementID == currentTime) {
                $(timeBlockEl[i]).removeClass('past');
                $(timeBlockEl[i]).addClass('present');
            }    
            else {
                $(timeBlockEl[i]).removeClass('past');
                $(timeBlockEl[i]).removeClass('present');
                $(timeBlockEl[i]).addClass('future');
            }
            
        }
    }
    //this should recheck the time every 5 minutes
    setInterval(checkTime(), (1000 * 60) * 5);
    


    //TODO Step3: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
        //HINT: How can the id attribute of each time-block be used to do this?
    
        for (let i = 9; i <= 16 ; i++){
            var inputList = document.querySelector('#input')
            inputList.innerHTML = "";
            //eventID = timeBlockEl[i].id
            var item = (localStorage.getItem([i]))

            
            var input = item;
            input.textContent = item

            input.append(item)


            
        }
        
   
    // COMPLETED Step4: Add code to display the current date in the header of the page.
    //Displays the current time in the format: month:day:year hours:minutes am/pm
    var time = dayjs().format('MMM D, YYYY, hh:mm a');
    $('#currentDay').text(time);

})
  