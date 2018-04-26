const nextQuestionButton = document.getElementById("nextQuestion");
const goToAnswerQuestionButton = document.getElementById("goToAnswerQuestion");
document.getElementById("numYes").innerHTML = localStorage.getItem("numYes");

document.getElementById("numNo").innerHTML = localStorage.getItem("numNo");

nextQuestionButton.addEventListener("click", function() {
  window.location.href= "answerQuestion.html";
});
