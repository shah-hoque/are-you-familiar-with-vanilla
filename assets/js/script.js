// when the button is started hide the start page

// show the timer and start the timer for 1 min



// EVENT STARTER -----------------------------------

// REMOVING START PAGE
$('#start-button').click(function() {
    $('#start-screen').fadeOut()
    $('.scores').fadeOut()
    $('.timer').fadeIn();

// CHANGE BACKGROUND IMAGE
    var imageUrl = "assets/images/stars.jpeg";
    $('body').css("background-image", "url(" + imageUrl + ")").fadeIn()


});
   












// DATA SOURCE
var questions = {
    1: {
        question: "What is 5 + 5?",
        possibleAnswers: ["pa1", "pa2", "pa3"],
        answer: "pa2",
    }



}