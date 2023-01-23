// when the button is started hide the start page

// show the timer and start the timer for 1 min


// LOADING FIRST QUESTION -----------------------------------
$('#start-button').click(function() {
    $('#start-screen').fadeOut()
    $('.timer').fadeIn();
})
// LOADING FIRST QUESTION (end) -----------------------------------








// DATA SOURCE
var questions = {
    1: {
        question: "What is 5 + 5?",
        possibleAnswers: ["pa1", "pa2", "pa3"],
        answer: "pa2",
    }



}