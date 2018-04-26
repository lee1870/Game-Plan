const nextQuestionButton = document.getElementById("nextQuestion");
const goToAnswerQuestionButton = document.getElementById("goToAnswerQuestion");
document.getElementById("numYes").innerHTML = localStorage.getItem("numYes") + " did press the button";

document.getElementById("numNo").innerHTML = localStorage.getItem("numNo") + " did not press the button";

nextQuestionButton.addEventListener("click", function() {
  window.location.href= "answerQuestion.html";
});
