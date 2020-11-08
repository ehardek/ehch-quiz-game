


const questions = [
    {
        q: "What are commonly used data types DO NOT include?",
        o: ["strings","booleans","alerts","numbers"],
        a: "alerts"
    },
    {
        q: "The condition in an if / else statement is enclosed wwithin ____. ",
        o: ["quotes","curly brackets","parentheses","square brackets"],
        a: "parentheses"
    },
    {
        q: "Arrays in JavaScript can be used to store _____. ",
        o: ["numbers and strings","other arrays","booleans","all of the above"],
        a: "all of the above"
    },
    {
        q: "String values must be enclsosed within _____ when being assigned to variables.",
        o: ["commas","curly brackets","quotes","parentheses"],
        a: "qoutes"
    },
    {
        q: "a very useful tool used during development and debugging for printing content to the debugger is:",
        o: ["JavaScript","terminal/bash","for loops","console.log"],
        a: "console.log"
    },
];


var countDown = 0;
var finalTime = 0;
var timer; 
 
    

// // I need a button that when clicked starts a the timer and presents a question 
function startGame () {
 countDown = 75
 document.getElementById("countDown").innerHTML = countDown;

    timer = setInterval(function() {
        countDown--;
        document.getElementById("countDown").innerHTML = countDown;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);

    next();
};
// // when i pick my answer from a list of buttons 
// function getQuestion () {

// };
// // when right i get time added the clock and presents another question 
function gameEnd() {}
// when wrong i get time deducted from the clock and am  

// if the clock ends or all the answers are answered the game is over


// when the game is over i can record my score

// i need a list of high scores 