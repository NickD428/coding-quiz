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
  function checkAnswer() {
    var selectedAnswer = this.value;
  
    var question = questions[currentQuestionIndex];
  
    if (selectedAnswer === question.answer) {
      feedbackElement.textContent = "Correct!";
    } else {
      feedbackElement.textContent = "Wrong!";
      time -= 10;
      if (time < 0) {
        time = 0;
      }
      timeElement.textContent = time;
    }
  
    feedbackElement.classList.remove("hide");
  
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      setTimeout(showQuestion, 1000);
    }
  }
  
  function resetQuestion() {
    questionTitleElement.textContent = "";
    answersElement.innerHTML = "";
    feedbackElement.classList.add("hide");
  }
  
  function endQuiz() {
    clearInterval(timerInterval);
  
    document.getElementById("questions").classList.add("hide");
    endScreen.classList.remove("hide");
  
    finalScoreElement.textContent = time;
  }
  
  function saveScore(event) {
    event.preventDefault();
  
    var initials = initialsElement.value.trim();
  
    if (initials === "") {
      alert("Please enter your initials.");
      return;
    }
  
    var score = {
      initials: initials,
      score: time
    };
  
    initialsElement.value = "";
  }