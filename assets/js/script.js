
if (window.matchMedia("(max-width: 600px)").matches) {
    // do something when the screen width is less than or equal to 600px
}

// EVENT STARTER -----------------------------------

// REMOVING START PAGE
$('#start-button').click(function() {
    $('#start-screen').fadeOut()
    $('.scores').fadeOut()
    $('.timer').fadeIn();

// CHANGE BACKGROUND IMAGE
    var imageUrl = "assets/images/stars.jpeg";
    $('body').css("background-image", "url(" + imageUrl + ")").fadeIn()

    if (window.matchMedia("(max-width: 600px)").matches) {
        $('body').css("background-image", "url(" + imageUrl + ")")
    }


countdown();


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








// DATA SOURCE
var questions = {
    1: {
        question: "What is 5 + 5?",
        possibleAnswers: ["pa1", "pa2", "pa3"],
        answer: "pa2",
    }



}