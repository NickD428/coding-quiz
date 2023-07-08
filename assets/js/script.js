var startButton = document.getElementById("start");
var timeElement = document.getElementById("time");
var questionTitleElement = document.getElementById("question-title");
var answersElement = document.getElementById("answers");
var endScreen = document.getElementById("end-screen");
var finalScoreElement = document.getElementById("final-score");
var initialsElement = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var feedbackElement = document.getElementById("feedback");

var currentQuestionIndex = 0;
var time = 0;
var timerInterval;

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveScore);

function startQuiz() {
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");

  time = 60;
  timeElement.textContent = time;
  timerInterval = setInterval(updateTime, 1000);

  showQuestion();
}

function updateTime() {
  time--;
  timeElement.textContent = time;

  if (time <= 0) {
    endQuiz();
  }
}

function showQuestion() {
    resetQuestion();
  
    var question = questions[currentQuestionIndex];
  
    questionTitleElement.textContent = question.title;
  
    for (var i = 0; i < question.choices.length; i++) {
      var choice = document.createElement("button");
      choice.textContent = question.choices[i];
      choice.setAttribute("class", "choice");
      choice.setAttribute("value", question.choices[i]);
      answersElement.appendChild(choice);
    }
  
    var answerButtons = document.getElementsByClassName("choice");
    for (var j = 0; j < answerButtons.length; j++) {
      answerButtons[j].addEventListener("click", checkAnswer);
    }
  }
  