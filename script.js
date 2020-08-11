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
var mainDiv = document.getElementById("mainDiv");
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
  for (let i = 0; i < questions.length; i++) {
    var questionTitle = questions[questionIndex].question;
    var answerOption = questions[questionIndex].answer;
    mainDiv.textContent = questionTitle;
  }

  //to create list of options and append corresponding answer choices for each question
  answerOption.forEach(function (newItem) {
    var answerItem = document.createElement("li");
    answerItem.textContent = newItem;
    mainDiv.appendChild(createNewUL);
    createNewUL.appendChild(answerItem);
    answerItem.addEventListener("click", (compare));
  })
}

//create compare function


//determine if last question has been answered


//create game over function

//tally score

//create input for initials to store to local storage
