//Array containing questions, answer options, and correct answer
var questions = [
  {
    question: "Which of the following is not a type of loop?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "What does DOM stand for?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "What do you mean I don't have a dog?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "Why did the chicken cross the road?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "Is abba-zabba truly you're only friend?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "What does CSS stand for?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "What happens after this last question?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
];

//declaring variables
var score = 0;
var questionIndex = 0;

//setting variables for manipulation
var timer = document.getElementById("timer");
var startQuiz = document.getElementById("startQuiz");
var questionsDiv = document.getElementById("mainDiv");
var timeRemaining = 76;
var interval = 0;
var timePenalty = 10;
var newUL = document.createElement("ul");

//add event listener for timer on click of start button
startQuiz.addEventListener("click", function(e) {
  console.log(e);
  var timeRemaining = 76;
  timer = setInterval(function () {
    timeRemaining--;
    timer.textContent = "Time" + timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(interval);
      gameOver();

    }
  }, 1000)
});

