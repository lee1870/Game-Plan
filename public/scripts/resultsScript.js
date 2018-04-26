const nextQuestionButton = document.getElementById("nextQuestion");
const goToAnswerQuestionButton = document.getElementById("goToAnswerQuestion");
const goToIndexButton = document.getElementById("goToIndex");

document.getElementById("numYes").innerHTML = localStorage.getItem("numYes");

document.getElementById("numNo").innerHTML = localStorage.getItem("numNo") + " did not press the button";

nextQuestionButton.addEventListener("click", function() {
  window.location.href= "answerQuestion.html";
});

goToIndexButton.addEventListener("click", function() {
  window.location.href= "index.html";
});
