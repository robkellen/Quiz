//Array containing questions, answer options, and correct answer
var questions = [
  {
    question: "Which of the following is not a type of loop?",
    options: ["word1", "word2", "word3", "word4"],
    answer: "word3",
  },
  {
    question: "What does DOM stand for?",
    options: ["word1", "word2", "word3", "word4"],
    answer: "word3",
  },
  {
    question: "What do you mean I don't have a dog?",
    options: ["word1", "word2", "word3", "word4"],
    answer: "word3",
  },
  {
    question: "Why did the chicken cross the road?",
    options: ["word1", "word2", "word3", "word4"],
    answer: "word3",
  },
  {
    question: "Is abba-zabba truly you're only friend?",
    options: ["word1", "word2", "word3", "word4"],
    answer: "word3",
  },
  {
    question: "What does CSS stand for?",
    options: ["word1", "word2", "word3", "word4"],
    answer: "word3",
  },
  {
    question: "What happens after this last question?",
    options: ["word1", "word2", "word3", "word4"],
    answer: "word3",
  },
];

//declaring variables
var score = 0;
var questionIndex = 0;

//setting variables for manipulation
var timer = document.querySelector("#timer");
var startQuiz = document.querySelector("#startQuiz");
var mainDiv = document.querySelector("#mainDiv");
var timeRemaining = 76;
var interval = 0;
var timePenalty = 10;
var createNewUL = document.createElement("ul");

//add event listener for timer on click of start button
startQuiz.addEventListener("click", function (e) {
  if (interval === 0) {
    interval = setInterval(function () {
      timeRemaining--;
      timer.textContent = "Time: " + timeRemaining;

      if (timeRemaining === 0) {
        clearInterval(interval);
        gameOver();
        timer.textContent = "Out of Time!";
      }
    }, 1000);
  }
  renderQuestions(questionIndex);
});
//renders questions and answer options to the HTML
function renderQuestions(questionIndex) {
  //clearing intro
  mainDiv.innerHTML = "";
  createNewUL.innerHTML = "";
  // for loop to add text from questions array
  for (var i = 0; i < questions.length; i++) {
    var questionTitle = questions[questionIndex].question;
    var questionOptions = questions[questionIndex].options;
    mainDiv.textContent = questionTitle;
  }
  //to create list of options and append corresponding answer choices for each question
  questionOptions.forEach(function (item) {
    var listItem = document.createElement("li");
    listItem.textContent = item;
    mainDiv.appendChild(createNewUL);
    createNewUL.appendChild(listItem);
    //listItem.addEventListener("click", (console.log));
  })
}


//create compare function


//determine if last question has been answered


//create game over function

//tally score

//create input for initials to store to local storage
