// on the click of the button, the timer starts and counts down from 60 seconds to 0

// make a DOM elemement for the start button
var startButtonEl = document.querySelector("#start-button");

// make a DOM element for the Hero section
var heroEl = document.querySelector("#hero-section");

// make a DOM element for the question area
var questionAreaEl = document.querySelector("#question-area");


//////////////// Quiz Question Logic //////////////////

// make an array to hold all questions and answers
var questions = [];

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








var displayQuestions = function ()
{
    // Change the Hero to invisible
    heroEl.remove();
    // make a new Div to be a grid container for the question and answers
    var questionEl = document.createElement("div");
    // give it a class name of question-box
    questionEl.className = "grid-container button-grid";
    // add 4 buttons
    questionEl.innerHTML = "<h1 class='center-column'>" + questions[0].question + "</h1><button class='answer-button' id='button-1'>" + questions[0].a1 + "</button><button class='answer-button' id='button-2'>" + questions[0].a2 + "</button><button class='answer-button' id='button-3'>" + questions[0].a3 + "</button><button class='answer-button' id='button-4'>" + questions[0].a4 + "</button>";
    // add the question element to the question area element
    questionAreaEl.appendChild(questionEl);
    
}









//////////////////// Timer Logic //////////////////////
var secondsLeft = 5;

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
    }
}

// Update the clockwork function every 1 seconds
var startTimer = function ()
{
    var timer = setInterval(clockWork, 1000); 
}

var quizStartHandler = function ()
{   
    // start the countdown
    startTimer();
    console.log("button clicked");
    // start the questions
    displayQuestions();
}

///////////////// Event Listeners ///////////////////

// add an event listener for the hero button that starts the timer and the quiz
startButtonEl.addEventListener("click", quizStartHandler);