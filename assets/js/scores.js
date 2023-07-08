
var scores = JSON.parse(localStorage.getItem("scores")) || [];

var scoreList = document.getElementById("score-list");


var clearButton = document.getElementById("clear");

function displayScores() {

  scoreList.innerHTML = "";


  for (var i = 0; i < scores.length; i++) {
    var scoreItem = document.createElement("li");
    scoreItem.textContent = scores[i].initials + " - " + scores[i].score;
    scoreList.appendChild(scoreItem);
  }
}


function clearScores() {

  localStorage.removeItem("scores");

  scoreList.innerHTML = "";
}

clearButton.addEventListener("click", clearScores);

displayScores();