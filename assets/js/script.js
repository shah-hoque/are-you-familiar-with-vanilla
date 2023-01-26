

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
var currentQNum = 2


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
        question: "How can you check if a variable is an array?",
        possibleAnswers: ["variable.isArray()", "Array.isArray(variable)", "variable instanceof Array", "typeof variable === 'array'"],
        answer: "Array.isArray(variable)",
    },

    {
        question: "What is the difference between == and === ?",
        possibleAnswers: ["== compares values, === compares values and types", "== compares types, === compares values", "== compares values and types, === compares values", "There is no difference between the two"],
        answer: "variable = undefined",
    },

    {
        question: "How do you set a variable to undefined?",
        possibleAnswers: ["variable = null", "variable = undefined", 'variable = ""', "variable = NaN"],
        answer: "x++",
    },

    {
        question: "What is the difference between var, let, and const?",
        possibleAnswers: ["var is global scope, let is block scope, const is constant", "var is function scope, let is block scope, const is constant", "var is function scope, let is global scope, const is constant", "var is block scope, let is function scope, const is constant"],
        answer: "var is function scope, let is block scope, const is constant",
    },

    {
        question: "How can you check if a string is empty?",
        possibleAnswers: ["string.isEmpty()", "string.length === 0", "string === ''", "string == null"],
        answer: "string.length === 0",
    },

    {
        question: "How can you create a copy of an array?",
        possibleAnswers: ["array.clone()", "array.copy()", "array.slice()", "[...array]"],
        answer: "[...array]",
    },

    {
        question: "What is the correct way to increment a variable?",
        possibleAnswers: ["x = x + 1", "x += 1", "x++", "x = x++"],
        answer: "x++",
    },
    
    {
        question: "How can you remove an element from the end of an array?",
        possibleAnswers: ["array.pop()", "array.remove()", "array.splice(-1, 1)", "array[array.length - 1] = null"],
        answer: "array.pop()",
    },

    {
        question: "How can you reverse the order of an array?",
        possibleAnswers: ["array.reverse()", "array.flip()", "array.invert()", "There is no built-in function to reverse an array in JavaScript"],
        answer: "array.reverse()",
    },

    {
        question: "What is the correct way to write an object?",
        possibleAnswers: ['var person = {firstName:"John", lastName:"Doe"};', 'var person = "firstName:John, lastName:Doe"', 'var person = (firstName:"John", lastName:"Doe")', 'var person = "firstName=John lastName=Doe"'],
        answer: 'var person = {firstName:"John", lastName:"Doe"};',
    },
]
