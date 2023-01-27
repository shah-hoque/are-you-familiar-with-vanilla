// EVENT L ON THE START BUTTON -----------------------------------
$('#start-button').click(function() {

// Removing the start screen
    $('#start-screen').fadeOut()
    $('.scores').fadeOut()
    $('.timer').fadeIn();

// Change background image
    var imageUrl = "assets/images/stars.jpeg";
    $('body').css("background-image", "url(" + imageUrl + ")").fadeIn()

// Unhide div
    $('#questions').show()

// Start the countdown
    countdown();    

// Create the 1st question
    newQ()
});
// EVENT L ON THE START BUTTON (end) -----------------------------------


// EVENT L ON THE LIST ITEMS -----------------------------------
$('#choices').on('click', 'li', function() {
    questionCheck(this);
});
// EVENT L ON THE LIST ITEMS (end) -----------------------------------


// TRACK THE CURRENT QUESTION
var currentQNum = 0


// FUNC) CREATES A QUESTION
function newQ() {
    $("#question-title").html(questionData[currentQNum].question);

    $("#choices ul").empty();
    $("#choices ul").append("<li>" + questionData[currentQNum].possibleAnswers[0] + "</li>");
    $("#choices ul").append("<li>" + questionData[currentQNum].possibleAnswers[1] + "</li>");
    $("#choices ul").append("<li>" + questionData[currentQNum].possibleAnswers[2] + "</li>");
    $("#choices ul").append("<li>" + questionData[currentQNum].possibleAnswers[3] + "</li>");
}


let clockStart = 60;
let sec = clockStart;
let timer;

// FUNC) START THE COUNTDOWN
function countdown() {
    sec = clockStart;
    timer = setInterval(() => {
        if (sec > 0) {
            $('#time').html(sec + ' sec');
            sec--;
        } else {
            clearInterval(timer);
        }
    }, 1000);
}


// FUNC) REDUCE THE COUNTDOWN ON WRONG ANSWER
function reduceCountdown() {
    if (sec > 10) { 
        sec -= 10;
    }
}


// FUNC) CHANGE THE QUESTION
function changeQ() {
    if (currentQNum != 9) {
        currentQNum++
    } 
}


// FUNC) REMOVE QUESTION
function removeQ() {
    $("#choices li").empty();
}


// FUNC) CHECK QUESTION RESPONSE
function questionCheck(listItem) {

    var clickedItemValue = $(listItem).text();
    // console.log("Answer should match: " + questionData[currentQNum].answer)

    if (clickedItemValue == questionData[currentQNum].answer) {
        $(listItem).css("background-color", "#32de84");
        setTimeout(function(){
            changeQ()
            removeQ()
            newQ()
        }, 500); // delay execution for half a second
    } else {
        $(listItem).css("background-color", "red");
        setTimeout(function(){
            changeQ()
            removeQ() 
            reduceCountdown()
            newQ()
        }, 500);
    }
}


// DATA SOURCE OF QUESTIONS
var questionData = [
    {
        question: "How can you check if a variable is an array?",
        possibleAnswers: ["variable.isArray()", "Array.isArray(variable)", "variable instanceof Array", "typeof variable === 'array'"],
        answer: "Array.isArray(variable)",
    },

    {
        question: "What is the difference between == and === ?",
        possibleAnswers: ["== compares values, === compares values & types", "== compares types, === compares values", "== compares values & types, === compares values", "There is no difference between the two"],
        answer: "== compares values, === compares values and types",
    },

    {
        question: "How do you set a variable to undefined?",
        possibleAnswers: ["variable = null", "variable = undefined", 'variable = ""', "variable = NaN"],
        answer: "variable = undefined",
    },

    {
        question: "How can you check if an element exists in an array?",
        possibleAnswers: ["array.contains(element)", "array.includes(element)", "array.indexOf(element) > -1", "array.find(element)"],
        answer: "array.includes(element)",
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
        possibleAnswers: ["array.reverse()", "array.flip()", "array.invert()", "No built-in function is available"],
        answer: "array.reverse()",
    },

    {
        question: "What is the correct way to write an object?",
        possibleAnswers: ['var person = {firstName:"John", lastName:"Doe"};', 'var person = "firstName:John, lastName:Doe"', 'var person = (firstName:"John", lastName:"Doe")', 'var person = "firstName=John lastName=Doe"'],
        answer: 'var person = {firstName:"John", lastName:"Doe"};',
    },
]
