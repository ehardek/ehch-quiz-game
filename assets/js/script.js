
const timeEl = document.getElementById('time-tag');
const quizEl = document.getElementById('quiz-section');
const startBtn = document.getElementById('start-button');
const initialsForm = document.getElementById('initials-form');
var questionIndex = 0;
var timer;
var time = questionsArr.length * 10;
// TODO: Create Start Function
// -- Hides start-section
// -- Displays quiz-section
//   > Gets first question in array  
//   > Fills button-group with answers
// -- Starts Clock 
function startQuiz(){
    var startEl = document.getElementById('start-section');
    startEl.setAttribute('class','hide');
    quizEl.removeAttribute('class');
    timer = setInterval(timeTrack,1000)
    timeEl.textContent = time;
}
function timeTrack(){
    time--;
    timeEl.textContent = time 
    if(time<=0){
        endQuiz()
    }
}
function getQuestion(){

}
function endQuiz(){
    var endEl = document.getElementById('end-section');
    quizEl.setAttribute('class','hide');
    endEl.removeAttribute('class');
}

// TODO: Set Up End Game Conditions
// -- Time === 0 
// -- Past Last Question 

// TODO: Create Save Highscore Function
// -- User Submits Initials 
// -- Get final score from time-tag

// TODO: Create Click Handler for Answer Buttons
// -- Checks the button clicked value.

startBtn.onclick = startQuiz;


