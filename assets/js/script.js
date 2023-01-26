

// EVENT L ON THE START BUTTON -----------------------------------

// REMOVING START PAGE
$('#start-button').click(function() {
    $('#start-screen').fadeOut()
    $('.scores').fadeOut()
    $('.timer').fadeIn();

// CHANGE BACKGROUND IMAGE
    var imageUrl = "assets/images/stars.jpeg";
    $('body').css("background-image", "url(" + imageUrl + ")").fadeIn()

// UNHIDE QUESTION DIV
$('#questions').show()

// START THE COUNTDOWN
countdown();

questions()
});




// COUNTDOWN TIMER
function countdown() {
    var clockEnds = 60;
    var sec = clockEnds;
    var timer = setInterval(() => {
        if (sec > 0) {
            $('#time').html(sec + ' sec');
            sec--;
        } else {
            clearInterval(timer);
        }
    }, 1000);
}

// CURRENT QUESTIONS
var currentQNum = 0


// QUESTIONS FOR USERS
function questions() {

    console.log(questionData[currentQNum])

    // Parse .question (child to questionData) into questionTitle
    $("#question-title").html(questionData[currentQNum].question);

    $("#choices ul").append("<li>" + questionData[currentQNum].possibleAnswers[0] + "</li>");
    $("#choices ul").append("<li>" + questionData[currentQNum].possibleAnswers[1] + "</li>");
    $("#choices ul").append("<li>" + questionData[currentQNum].possibleAnswers[2] + "</li>");
    $("#choices ul").append("<li>" + questionData[currentQNum].possibleAnswers[3] + "</li>");



}

// DATA SOURCE
var questionData = [
    {
        question: "How can you check if a variable is an array in JavaScript?",
        possibleAnswers: ["variable.isArray()", "Array.isArray(variable)", "variable instanceof Array", "typeof variable === 'array'"],
        answer: "Array.isArray(variable)",
    },

    {
        question: "What is 10 + 10?",
        possibleAnswers: ["ok1", "ok2", "ok3"],
        answer: "ok3",
    }

]
