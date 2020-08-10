//Setting element variables
var startButton = document.querySelector("start-quiz"),

//Array containing questions, answer options, and correct answer
var questions = [
  {
    question: "Which of the following is not a type of loop?",
    options: ["1", "2", "3", "4"],
    answer: 2 || "2",
  },
  {
    question: "What does DOM stand for?",
    options: ["1", "2", "3", "4"],
    answer: 2 || "2",
  },
  {
    question: "What do you mean I don't have a dog?",
    options: ["1", "2", "3", "4"],
    answer: 2 || "2",
  },
  {
    question: "Why did the chicken cross the road?",
    options: ["1", "2", "3", "4"],
    answer: 2 || "2",
  },
  {
    question: "Is abba-zabba truly you're only friend?",
    options: ["1", "2", "3", "4"],
    answer: 2 || "2",
  },
  {
    question: "What does CSS stand for?",
    options: ["1", "2", "3", "4"],
    answer: 2 || "2",
  },
  {
    question: "What happens after this last question?",
    options: ["1", "2", "3", "4"],
    answer: 2 || "2",
  },
];

//declaring variables
var score = 0;
var questionDisplay = 0;
var initialTime = 75;

function setTimer() {
  var 
}