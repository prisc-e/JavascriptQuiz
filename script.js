//Coding Quiz (Challenge4)
var timerStart = document.getElementById("countdown");
var quiz = document.getElementById("quizContent")
var multChoice = document.getElementById("selection");

//Get references to the #start element
let startBtn = document.querySelector("#start");
var points = 0;
let q1 =[
  {
    question: "Between which tag is Javascript code inserted?",
    answer: "2. <script></script>",
    choices: [
      "1. <javascript></javascript>",
      "2. <script></script>",
      "3. <js></js>",
      "4. <java></java>"
    ]
  }];
let q2 =[
  {
    question: "How is a constant variable declared?",
    answer: "4. const (variable name)",
    choices: [
      "1. con.(variable name)",
      "2. constant (variable name)",
      "3. (variable name) in all uppercase letters",
      "4. const (variable name)"
    ]
  }];
let q3 =[
    {
    question: "What is the correct way to define a function with 2 parameters?",
    answer: "function name(parameter1, parameter2){",
    choices: [
      "1. function name(parameter1, parameter2){",
      "2. function name.(parameter1;parameter2){",
      "3. function(name).parameter1.parameter2){",
      "4. name.function(parameter1,parameter2){"
    ]
  }];
  let q4=[
  {
    question: "What does the concat() method do?",
    answer: "4. Joins 2 or more strings",
    choices: [
      "1. Pushes a number into a string",
      "2. Joins two or more arrays",
      "3. Trims a string",
      "4. Joins 2 or more strings"
    ]
  }];
  let q5= [{
    question: "What does the break statement do?",
    answer: "3. Jumps out of a loop",
    choices: [
      "1. Exits a function",
      "2. Jumps over one iteration of a loop",
      "3. Jumps out of a loop",
      "4. Jumps into a loop"
    ]
  }];


function runQuiz(){
  var correct = true;
  

  multChoice.addEventListener("click", isCorrect); 
    var choice = multChoice.event;

//Object.values(q1).forEach(val => Selection(val));
//create foreach to loop through choices(make questions separate strings to be called)
  
   
    
  }   
  function isCorrect(){
    if (choice.value === answer.value){
            getPoints(correct);
        }
  }
  function getPoints(correct){
    if (correct){
      points++;
    }
    return points;
  }
  function quizSelector(){

  }
  

function startQuiz(){
  
    countdown();
    runQuiz();
  
}
function countdown(){
  var setTime = setInterval(countdown, 75000);
  timerStart.textContent = "Time: " + setTime;
  setTime--;
if (setTime < 0){
    clearInterval(setTime);
    
}
};
//
// Add event listener to generate button
startBtn.addEventListener("click", startQuiz);