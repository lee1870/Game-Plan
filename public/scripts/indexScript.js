const goToAskQuestionButton = document.getElementById("goToAskQuestion");
const goToAnswerQuestionButton = document.getElementById("goToAnswerQuestion");

goToAskQuestionButton.addEventListener("click", function() {
  window.location.href= "askQuestion.html";
});

goToAnswerQuestionButton.addEventListener("click", function() {
  console.log("going to play game");
  window.location.href= "answerQuestion.html";
});

/*let src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js";
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAR2FdadMlQgqJAzKJF0mHZGniMMBMS5Rk",
    authDomain: "game-plan-4263.firebaseapp.com",
    databaseURL: "https://game-plan-4263.firebaseio.com",
    projectId: "game-plan-4263",
    storageBucket: "game-plan-4263.appspot.com",
    messagingSenderId: "335501876781"
  };
  firebase.initializeApp(config);*/
