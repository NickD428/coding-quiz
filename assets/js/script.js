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

