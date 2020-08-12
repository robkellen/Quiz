//Array containing questions, answer options, and correct answer
var questions = [
  {
    question: "Which of the following is not a type of loop?",
    options: ["1. While", "2. Do-while", "3. Each", "4. For"],
    answer: "3. Each",
  },
  {
    question: "What does DOM stand for?",
    options: ["1. Data Organization Method", "2. Document Object Model", "3. Digital Office Meeting", "4. Differential Of Mediums"],
    answer: "2. Document Object Model",
  },
  {
    question: "Arrays in Javascript can be used to store ___?",
    options: ["1. Booleans", "2. Numbers", "3. Other Arrays", "4. All of the Above"],
    answer: "4. All of the Above",
  },
  {
    question: "Which of these is NOT a programming language?",
    options: ["1. Java", "2. Ruby", "3. Banana", "4. Python"],
    answer: "3. Banana",
  },
  {
    question: "What does CSS stand for?",
    options: ["1. Cascading Sheet Style", "2. Cascading Style Sheet", "3. Common Sense Sequencing", "4. Camel Style Sentencing"],
    answer: "2. Cascading Style Sheet",
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

//link to high score function
var viewHighScores = document.querySelector("#high-score");
  viewHighScores.addEventListener("click", function(){
    highScores();
  })

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
    createNewUL.setAttribute("id", "question-ul");
    createNewUL.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}

//Comparing if option selected by user was correct/incorrect
function compare(e) {
  var selection = event.target;
  if (selection.matches("li")) {
    var createNewDiv = document.createElement("div");
    createNewDiv.setAttribute("id", "createNewDiv");
    //condition = answer is correct
    if (selection.textContent == questions[questionIndex].answer) {
      score++;
      createNewDiv.textContent = "You are correct!";
    } else {
      //condition = answer is incorrect
      createNewDiv.textContent =
        "Incorrect!  The correct answer is: " + questions[questionIndex].answer;
      //deduct 10 seconds from timer
      timeRemaining = timeRemaining - timePenalty;
    }
  }

  //to determine which question the user is on
  questionIndex++;

  if (questionIndex >= questions.length) {
    //gameOver if user just answered last question
    gameOver();
    createNewDiv.textContent =
      "You Finished! You answered " +
      score +
      "/" +
      questions.length +
      "correct.";
  } else {
    //if not the final question then render the next question
    renderQuestions(questionIndex);
  }
  mainDiv.appendChild(createNewDiv);

}
//create and append game over page
function gameOver() {
  mainDiv.innerHTML = "";
  timer.innerHTML = "";
  //Game Over header
  var createNewH1 = document.createElement("h1");
  createNewH1.setAttribute("id", "createNewH1")
  createNewH1.textContent = "Game Over!"

  mainDiv.appendChild(createNewH1);

  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");
  
  mainDiv.appendChild(createP);

  //Time remaining turned into final score
  if (interval >= 0) {
    var endTime = timeRemaining;
    var createP2 = document.createElement("p");
    clearInterval(interval);
    createP.textContent = "Your Score is: " + endTime;

    mainDiv.appendChild(createP2);
  }
  //Label for initials input
  var createNewLabel = document.createElement("label");
  createNewLabel.setAttribute("id", "createNewLabel");
  createNewLabel.textContent = "Enter your initials: ";

  mainDiv.appendChild(createNewLabel);
  //Input
  var createNewInput = document.createElement("input");
  createNewInput.setAttribute("type", "text");
  createNewInput.setAttribute("id", "initials") ;
  createNewInput.textContent = "";

  mainDiv.appendChild(createNewInput);

  var createNewUL = document.createElement("ul")
  createNewUL.setAttribute("id", "createNewUl");
  createNewUL.textContent = "";
  mainDiv.appendChild(createNewUL);
  //submit
  var createNewSubmit = document.createElement("submit");
  createNewSubmit.setAttribute("type", "submit");
  createNewSubmit.setAttribute("id", "submit");
  createNewSubmit.setAttribute("class", "submit");
  createNewSubmit.textContent = "Submit";

  mainDiv.appendChild(createNewSubmit);
  //adding event listener to submit to store initials/score to local storage
  createNewSubmit.addEventListener("click", function(){
    var initials = createNewInput.value;

    if (initials === "") {
      alert("No value entered!");
      console.log("No value entered!")

    } else {
      var finalScore = {
        initials: initials,
        score: endTime
      }
      console.log(finalScore);
      var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);

      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore);
      
    }
    highScores();
  })
}



function highScores() {
  //clearing mainDiv contents
  mainDiv.innerHTML = "";

  //creating new H1
  var createNewH1 = document.createElement("h1");
  createNewH1.setAttribute("id", "createNewH1")
  createNewH1.textContent = "High Scores";
  mainDiv.appendChild(createNewH1);
  
  //retrieving scores from local storage
  var showAllScores = localStorage.getItem("allScores");
  showAllScores = JSON.parse(showAllScores);

  //creating list and appending them
  if (showAllScores !== null) {
    for (let i = 0; i < showAllScores.length; i++) {
      var createNewLi = document.createElement("li");
      createNewLi.setAttribute("id", "scoreList");
      createNewLi.textContent = showAllScores[i].initials + " " + showAllScores[i].score;
      mainDiv.appendChild(createNewLi);
      
    }
  }
  //creating 'Clear Scores' button & appending
  var clearBtn = document.createElement("button");
  clearBtn.setAttribute("id", "clearBtn");
  clearBtn.innerHTML ="Clear Scores";
  mainDiv.appendChild(clearBtn);



  //creating event listenter for 'Clear Scores' button
  clearBtn.addEventListener("click", function(){
    localStorage.clear();
    document.getElementById("scoreList").remove();
  });

  var startOverBtn = document.createElement("button");
  startOverBtn.innerHTML = "Start Over";
  mainDiv.appendChild(startOverBtn);

  startOverBtn.addEventListener("click", function(){
    location.reload();

  })


  
  
  
  
  

}






