// on the click of the button, the timer starts and counts down from 60 seconds to 0

// make a DOM elemement for the start button
var startButtonEl = document.querySelector("#start-button");

// make a DOM element for the Hero section
var heroEl = document.querySelector("#hero-section");

// make a DOM element for the question area
var questionAreaEl = document.querySelector("#question-area");

// make a DOM element for the question area
var finalAreaEl = document.querySelector("#final-area");

// make a DOM element for the final form
var finalFormEl = document.querySelector("#give-initials");

// make a DOM element for the footer
var footEl = document.querySelector("#foot");

// make a new Div to be a grid container for the question and answers
var questionEl = document.createElement("div");

// make a new Div to be a grid container for the footer message
var footerMessageEl = document.createElement("div");

// make a new Div to be a grid container for the final screen message
var finalEl = document.createElement("div");

var timer = null;

var initials = [];

// make an array to store the high scores
var highScores = [];


/////////////////////////////////////////////////////////

// set final screen to not show until it's time
//finalFormEl.style.display === "none";





//////////////// Quiz Question Logic //////////////////

var quizQuestion = 0;

// make an array to hold all questions and answers
var questions = [];

// make an array to hold all correct answers
var answers = [1,2,3,4,1];

var givenAnswer = 0;

var correctAnswers = 0;

// load up the array with questions and answers
// question 0
var questionObject0 = 
{
    question: "Commonly used data types DO Not Include:",
    a1: "1. strings",
    a2: "2. booleans",
    a3: "3. alerts",
    a4: "4. numbers"
}
// push question object into the questions array
questions.push(questionObject0);

// question 1
var questionObject1 = 
{
    question: "The condition in an if / else statement is enclosed with __________.",
    a1: "1. quotes",
    a2: "2. curly brackets",
    a3: "3. parenthesis",
    a4: "4. square brackets"
}
// push question object into the questions array
questions.push(questionObject1);

// question 2
var questionObject2 = 
{
    question: "Arrays in JavaScript can be used to store ________.",
    a1: "1. numbers and strings",
    a2: "2. other arrays",
    a3: "3. booleans",
    a4: "4. all of the above"
}
// push question object into the questions array
questions.push(questionObject2);

// question 3
var questionObject3 = 
{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    a1: "1. commas",
    a2: "2. curly brackets",
    a3: "3. quotes",
    a4: "4. parenthesis"
}
// push question object into the questions array
questions.push(questionObject3);

// question 4
var questionObject4 = 
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a1: "1. JavaScript",
    a2: "2. terminal/bash",
    a3: "3. for loops",
    a4: "4. console.log"
}
// push question object into the questions array
questions.push(questionObject4);
console.log(questions);

var displayQuestions = function (index)
{
        // Change the Hero to invisible
        heroEl.remove();
        questionEl.remove();
        
        // give it a class name of question-box
        questionEl.className = "grid-container button-grid";
        // add 4 buttons
        questionEl.innerHTML = "<h1 class='center-column'>" + questions[index].question + "</h1><button class='answer-button' id='button-1'>" + questions[index].a1 + "</button><button class='answer-button' id='button-2'>" + questions[index].a2 + "</button><button class='answer-button' id='button-3'>" + questions[index].a3 + "</button><button class='answer-button' id='button-4'>" + questions[index].a4 + "</button>";
        // add the question element to the question area element
        questionAreaEl.appendChild(questionEl);
}

var nextQuestion = function(event)
{
    // get target element from event
    var targetEl = event.target;

    // make the above for loop go through next loop
    quizQuestion++;
    
    if (targetEl.matches("#button-1")) 
    {
        givenAnswer = 1;
        console.log("button 1 was clicked")
    } 
    else if (targetEl.matches("#button-2")) 
    {
        givenAnswer = 2;
        console.log("button 2 was clicked")
    } 
    else if (targetEl.matches("#button-3")) 
    {
        givenAnswer = 3;
        console.log("button 3 was clicked")
    } 
    else if (targetEl.matches("#button-4")) 
    {
        givenAnswer = 4;
        console.log("button 4 was clicked")
    } 

    // make the footer give a right or wrong message
    if (givenAnswer === answers[quizQuestion - 1])
    {
        if(footerMessageEl) {footerMessageEl.remove()};
        footerMessageEl.className = "foot-message grid-container";
        footerMessageEl.innerHTML = "<h1 class='center-column validation'>Right!</h1>";
        footEl.appendChild(footerMessageEl);
        correctAnswers++;
    }
    else
    {
        if(footerMessageEl) {footerMessageEl.remove()};
        footerMessageEl.className = "foot-message grid-container";
        footerMessageEl.innerHTML = "<h1 class='center-column validation'>Wrong!</h1>";
        footEl.appendChild(footerMessageEl);
    }
    
    if (quizQuestion > 4 || secondsLeft < 0)
    {
        clearInterval(timer);
        finalScreen();
    }
    else
    {
        // display the next question
        displayQuestions(quizQuestion);
    }
}

//////////////////// Final Screen ////////////////////
var finalScreen = function()
{
    
    // collect initials from player
    var currentInitials = prompt("All Done!  Your final score is " + correctAnswers + ".  Enter Initials:");
    initials.push(currentInitials);
    console.log(initials);
    highScores.push(correctAnswers);
    console.log(highScores);

    // determine high score
    var max = 0;
    for (var i = 0; i < highScores.length; i++)
    {
        var now = highScores[i];
        if (highScores[i] > highScores[max])
        {
            max = i;
        }
    }

    // Display high score and ask user to go back or clear high scores
    var x = function openWin()
    {
        var myBtn=document.getElementById("myBtn");
        myBtn=window.open('','','width=200,height=300');
        myBtn.document.write("<p>High Score</p>");
        myBtn.document.write("<p>1. " + initials[max] + " - " + highScores[max] + "</p>");
        myBtn.focus();
    }
    x();

    location.reload();
}

//////////////////// Timer Logic //////////////////////
var secondsLeft = 75;

// display time left once per second
var clockWork = function()
{
    display = document.querySelector('#timer');
    display.textContent = "Time :" + secondsLeft;
    secondsLeft--;

    // stop timer when it reaches 0
    if (secondsLeft < 0)
    {
        display.textContent = "Time :0";
        ///////////// Call the function that changes the screen to the final screen showing points
        //clearInterval(startTimer);
        clearInterval(timer);
        finalScreen();
    }
}

// Update the clockwork function every 1 seconds
var startTimer = function ()
{
    
    timer = setInterval(clockWork, 1000); 
}

//debugger;
var quizStartHandler = function ()
{   
    // start the countdown
    startTimer();
    console.log("button clicked");
    // start the questions
    displayQuestions(quizQuestion);
}

///////////////// Event Listeners ///////////////////

// add an event listener for the hero button that starts the timer and the quiz
startButtonEl.addEventListener("click", quizStartHandler);

// add an event listener for the answer buttons
questionAreaEl.addEventListener("click", nextQuestion);