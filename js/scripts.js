
// Buissnes
var endDisplay = function(givenNumber){
  var theArray = [], count = 0;
  if (isNaN(givenNumber)) {
    return theArray;
  }
  else {
    for (var i = 0; i < givenNumber; i++){
        count++;
        theArray.push(count);
    }
    for (var i = 0; i < theArray.length; i++){
      if (theArray[i] % 15 === 0){
        theArray[i] = "PING - PONG";
      }else if (theArray[i] % 5 === 0){
        theArray[i] = "PONG";
      }else if (theArray[i] % 3 === 0){
        theArray[i] = "PING";
      }
    } return theArray;
  }
};

// User-interface
$(document).ready(function(){
  $("form#main").submit(function(event){
    event.preventDefault();
    $("#output").empty();
    var givenInput = parseInt($("input#number").val())
    var endArray = endDisplay(givenInput);
    for (var i = 0; i < endArray.length; i++){
      $("#output").append("<li>" + endArray[i] + "</li>");
    }

  });
});
