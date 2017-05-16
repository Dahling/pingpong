
// Buissnes
var endDisplay = function(givenNumber){ //function - user gives number, which also equals the variable 'endDisplay'
  var theArray = [], count = 0; //inside is variable 'theArray' which equals array and the count starts at 0
  if (isNaN(givenNumber)) { // this makes it so that nothing happens if the user gives anything that's NaN
    return theArray; //and this says to return the array -clearly
  }
  else {
    for (var i = 0; i < givenNumber; i++){ // variable i(index) is zero. When i's < inputted number, add one
        count++; //add one to the count
        theArray.push(count); //add one to the array count (this is making the list of numbers
    }
    for (var i = 0; i < theArray.length; i++){ //when i is less than the length of the array, add one
      if (theArray[i] % 15 === 0){ //if the number is divisible by 15 with a remainder of zero
        theArray[i] = "PING - PONG"; //the number equals ping-pong
      }else if (theArray[i] % 5 === 0){ //if the number is divisible by 5 with a remainder of zero
        theArray[i] = "PONG"; //the number equals pong
      }else if (theArray[i] % 3 === 0){ //if the number is divisble by 3 with a remainder of zero
        theArray[i] = "PING"; //the number euqals ping
      }
    } return theArray; //return the array of numbers with every 'ping' 'pong' and 'ping-pong'
  }
};

// User-interface
$(document).ready(function(){
  $("form#main").submit(function(event){
    event.preventDefault();
    $("#output").empty(); //refresh the form
    var givenInput = parseInt($("input#number").val()) //value of the user's number must be parseInt bc it's a string
    var endArray = endDisplay(givenInput); //the user's number goes into the function created above, which = endArray
    for (var i = 0; i < endArray.length; i++){ //when index of 0 is less than length of array of numbers, we add one
      $("#output").append("<li>" + endArray[i] + "</li>"); //append the list of numbers in the output on the index
    }

  });
});
